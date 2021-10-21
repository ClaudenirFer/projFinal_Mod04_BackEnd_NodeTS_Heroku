import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    profiles: {
      select: {
        id: false,
        nickname: true,
        image: true,
      },
    },
  };

  async create(dto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      ...dto,
      profiles: {
        create: dto.profiles,
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

  update(id: number, data: UpdateUserDto) {
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
