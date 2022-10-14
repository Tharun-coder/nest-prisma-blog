import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  body: string;

  authorId: string;
}
