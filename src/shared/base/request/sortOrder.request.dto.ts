import {ApiPropertyOptional} from '@nestjs/swagger';
import {IsEnum, IsOptional} from 'class-validator';
import { SortOrderType } from '@Core/constants';

export class SortOrderRequestDto{
  @IsOptional()
  @ApiPropertyOptional()
  orderBy: string;

  @IsEnum(SortOrderType)
  @IsOptional()
  @ApiPropertyOptional()
  sortOrder: SortOrderType = SortOrderType.DESC;
}