import { Genre } from "src/genres/entities/genres.entity";

export class Game {
  id?: number;
  title: string;
  cover: string;
  description: string;
  launchYear: string;
  imdbRating: number;
  youtubeUrl: string;
  gamePlayUrl: string;
  genres?: Genre[];
}
