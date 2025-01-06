import {Type} from 'class-transformer';
import {IsOptional} from 'class-validator';
import {ApiPropertyOptional} from '@nestjs/swagger';
import { SortOrderRequestDto } from '@Shared/base/request/sortOrder.request.dto';

export class PagingRequestDto extends SortOrderRequestDto{
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional()
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional()
  pageSize?: number = 10;

  get skip(): number {
    return (this.page! - 1) * this.pageSize!;
  }
}