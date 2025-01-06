import {ApiProperty} from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  result: boolean = true;

  constructor(partial: Partial<AuthResponseDto>) {
    Object.assign(this, partial);
  }
}