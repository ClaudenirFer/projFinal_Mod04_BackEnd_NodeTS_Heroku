import { IsString } from "class-validator";
import { Genre } from "../entities/genres.entity";

export class CreateGenreDto extends Genre {
  @IsString()
  genre: string;
}
