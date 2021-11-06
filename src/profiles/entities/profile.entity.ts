import { Prisma } from '.prisma/client';
import { IsOptional } from 'class-validator';
import { Game } from 'src/games/entities/game.entity';

export class Profile {
  id?: number;
  nickname: string;
  image: string;
  userId: number;

  // games?: Game[];
}
