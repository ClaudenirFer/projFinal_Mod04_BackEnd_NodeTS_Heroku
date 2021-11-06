import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateGameDto } from 'src/games/dto/create-game.dto';
import { Game } from 'src/games/entities/game.entity';
import { Profile } from '../entities/profile.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateProfileDto extends Profile {
  @IsString()
  nickname: string;

  @IsString()
  image: string;

  @IsOptional()
  @IsInt()
  idProf?: number;
  // @IsInt({ each: true })
  // @IsArray()
  // games?: CreateGameDto[];
}
