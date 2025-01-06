import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponseDto {
  @ApiProperty()
  id: number;
  constructor(partial: Partial<SuccessResponseDto>) {
    Object.assign(this, partial);
  }
}