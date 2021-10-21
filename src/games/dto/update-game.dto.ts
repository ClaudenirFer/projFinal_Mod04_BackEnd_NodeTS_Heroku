// import { PartialType } from "@nestjs/mapped-types";
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { UpdateGenreDto } from 'src/genres/dto/update-genre.dto';
import { Genre } from 'src/genres/entities/genres.entity';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends CreateGameDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateGenreDto)
  @IsArray()
  genres: Genre[];
}
