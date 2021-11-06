import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @IsString()
  nickname: string;

  @IsString()
  image: string;

  @IsInt()
  @IsOptional()
  userId?: number;
}
