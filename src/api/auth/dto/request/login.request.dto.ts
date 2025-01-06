import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';
import { ErrorCode } from "@Core/constants";


export class LoginRequestDto {
  @IsNotEmpty({message: ErrorCode.V009})
  @IsString({message: ErrorCode.V010})
  @ApiProperty()
  username: string;

  @IsNotEmpty({message: ErrorCode.V012})
  @IsString({message: ErrorCode.V011})
  @ApiProperty()
  password: string;
}