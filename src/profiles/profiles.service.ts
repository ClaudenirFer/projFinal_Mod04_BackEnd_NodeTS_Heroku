// import { Prisma } from '@prisma/client';
// import { prisma } from '.prisma/client';
// import { Prisma } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { formatWithCursor } from 'prettier';
import { Public } from 'src/auth/public.decorator';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProfileDto) {
    const data = dto;

    return this.prisma.profile.create({ data });
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  findOne(id: number) {
    return this.prisma.profile.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateProfileDto) {
    const data = dto;

    return this.prisma.profile.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.profile.delete({ where: { id } });
  }
}
