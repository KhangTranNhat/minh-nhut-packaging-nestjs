import { ErrorCode } from '@Core/constants';
import { ApiProperty } from '@nestjs/swagger';
import { ImageResponseDto } from '@Shared/base/response';

export class BannerResponseDto{
  @ApiProperty()
  name: string;

  @ApiProperty()
  image: ImageResponseDto;
}