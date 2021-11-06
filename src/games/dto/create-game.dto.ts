import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Game } from '../entities/game.entity';

export class CreateGameDto extends Game {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  cover: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  launchYear: string;

  @IsNumber()
  @IsNotEmpty()
  imdbRating: number;

  @IsString()
  @IsNotEmpty()
  youtubeUrl: string;

  @IsString()
  @IsNotEmpty()
  gamePlayUrl: string;

  @IsInt({ each: true })
  @ArrayNotEmpty()
  @IsArray()
  genresIds: number[];
}

// {

//   "title": "Enduro",
//   "cover": "https://majornelson.com/Insurgency.jpg",
//   "description": "Lute em cenários devastados",
//   "launchYear": "2021",
//   "imdbRating": 9,
//   "youtubeUrl": "sdfsf",
//   "gamePlayUrl": "sfsfd",
//   "genresIds": [

//       1

//   ]

// }
