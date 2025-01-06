import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ErrorCode } from '@Core/constants';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBannerRequestDto{
  @IsOptional()
  @IsString({message: ErrorCode.V002})
  @ApiPropertyOptional()
  name: string;

  @IsOptional()
  @IsNumber({}, {message: ErrorCode.V004})
  @ApiPropertyOptional()
  imageId: string;
}