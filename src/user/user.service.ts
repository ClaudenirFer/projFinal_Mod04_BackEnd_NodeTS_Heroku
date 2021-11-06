import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { profile } from 'console';
import { Profile } from 'src/profiles/entities/profile.entity';
// import { profile } from 'console';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.GameInclude = {
    profiles: {
      select: {
        id: true,
        nickname: true,
        image: true,
        // games: true
      },
    },
  };

  async create(dto: CreateUserDto) {
    // const gamesIds = dto.gamesIds;
    // delete dto.gamesIds;

    // delete dto.profiles;
    const data: Prisma.UserCreateInput = {
      ...dto,
      profiles: {
        create: dto.profiles,
        // connect: gamesIds.map((gameId) => ({ id: gameId }))
      },
      password: await bcrypt.hash(dto.password, 10),
    };

    const cratedUser = await this.prisma.user.create({ data });

    return {
      cratedUser,
      password: undefined,
    };
  }

  findAll() {
    return this.prisma.user.findMany({
      include: this._include,
    });
  }

  findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: this._include,
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  update(id: number, dto: UpdateUserDto) {
    const idProf = dto.idProf;
    delete dto.idProf;

    const data: Prisma.UserUpdateInput = {
      ...dto,
      profiles: {
        upsert: dto.profiles.map((profileDto) => ({
          where: { id },
          update: {
            nickname: profileDto.nickname,
            image: profileDto.image,
          },
          create: {
            nickname: profileDto.nickname,
            image: profileDto.image,
          },
        })),
      },
    };

    return this.prisma.user.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
