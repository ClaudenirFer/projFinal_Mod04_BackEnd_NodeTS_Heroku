import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';

export class CreateUserDto extends User {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsBoolean()
  @IsNotEmpty()
  admin: boolean;

  @ValidateNested({ each: true })
  @Type(() => CreateProfileDto)
  @IsArray()
  @IsOptional()
  profiles?: CreateProfileDto[];

  @IsOptional()
  @IsInt()
  idProf?: number;

  // @IsInt({ each: true })
  // @IsArray()
  // gamesIds?: number[];
}

// {

//   "name": "Renata",
//   "lastname": "Souza",
//   "email": "renata@gmail.com",
//   "password": "Ab123@",
//   "cpf": "513.741.190-67",
//   "admin": true,
//   "profiles": [
//       {
//           "nickname": "rere21",
//           "image": "http://rere.com/perfil"
//       }
//   ]
// }
