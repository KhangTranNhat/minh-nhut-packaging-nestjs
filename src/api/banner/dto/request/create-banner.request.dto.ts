import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ErrorCode } from '@Core/constants';

export class CreateBannerRequestDto{
  @IsNotEmpty({message: ErrorCode.V001})
  @IsString({message: ErrorCode.V002})
  @ApiProperty()
  name: string;

  @IsNotEmpty({message: ErrorCode.V003})
  @IsNumber({}, {message: ErrorCode.V004})
  @ApiProperty()
  imageId: string;
}