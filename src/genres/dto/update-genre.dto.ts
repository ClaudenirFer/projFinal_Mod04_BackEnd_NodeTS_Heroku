import { PartialType } from '@nestjs/mapped-types';
import { CreateGenreDto } from './create-genre.dto';

export class UpdateGenreDto extends PartialType(CreateGenreDto) {}

// "title": "CS 3",
// "cover": "https://cs.com.br/enduro.jpg",
// "description": "Ação",
// "launchYear": "2009",
// "imdbRating": 7,
// "youtubeUrl": "sdfsf",
// "gamePlayUrl": "sfsfd",
// "genres":[],
// "genresIds": [
//     2
// ]
