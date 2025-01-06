import { ApiProperty } from '@nestjs/swagger';


export class PaginationResponseMetaDto{
  @ApiProperty()
  page: number;
  @ApiProperty()
  pageSize: number;
  @ApiProperty()
  total: number;
  @ApiProperty()
  totalPage: number;
}
export class SuccessResponseMetaDto {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
}

export class ApiResponseDto<T> {
  @ApiProperty()
  meta: SuccessResponseMetaDto;
  @ApiProperty()
  response: T | T[];
}