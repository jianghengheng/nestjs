import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  name: string;
  @IsNumber()
  @ApiProperty()
  age: number;
  @IsString()
  @ApiProperty()
  sex: string;
  @IsString()
  @ApiProperty()
  paw: string;
}
