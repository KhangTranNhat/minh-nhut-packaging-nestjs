import { ApiProperty } from '@nestjs/swagger';

export class ImageResponseDto{
  @ApiProperty()
  id: string;

  @ApiProperty()
  url: string;

  constructor(partial: Partial<ImageResponseDto>) {
    Object.assign(this, partial);
  }
}