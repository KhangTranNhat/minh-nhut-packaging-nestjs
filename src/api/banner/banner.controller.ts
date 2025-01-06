import { ApiParam, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put, Query,
} from '@nestjs/common';
import { BANNER_ENDPOINTS } from '@Core/constants';
import { ApiResponse, PaginationResponse } from '@Infrastructures/decorator';
import { SuccessResponseDto } from '@Shared/base/response';
import { BannerService } from '@Usecase/banner';
import {
  CreateBannerRequestDto,
  GetListBannerRequestDto,
  UpdateBannerRequestDto,
} from '@Api/banner/dto/request';
import { BannerResponseDto } from '@Api/banner/dto/response';

@ApiTags('Banner Management Controller')
@Controller(BANNER_ENDPOINTS.CONTROLLER)
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  //Create Banner
  @Post(BANNER_ENDPOINTS.CREATE)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ type: SuccessResponseDto })
  async create(@Body() param: CreateBannerRequestDto) {
    const result = await this.bannerService.create(param);
    return result;
  }

  //Get List Banner
  @Get(BANNER_ENDPOINTS.GET_LIST)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ type: BannerResponseDto, isPaginated: true })
  @PaginationResponse()
  async getList(@Query() param: GetListBannerRequestDto) {
    const result = await this.bannerService.getList(param);
    return result;
  }

  //Get Banner By Id
  @Get(BANNER_ENDPOINTS.GET_BY_ID)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ type: BannerResponseDto })
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async getById(@Param('id') id: string) {
    const result = await this.bannerService.getById(id);
    return result;
  }

  //Update Banner
  @Put(BANNER_ENDPOINTS.UPDATE_BY_ID)
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @ApiResponse({ type: SuccessResponseDto })
  async update(@Param('id') id: string, @Body() param: UpdateBannerRequestDto) {
    const result = await this.bannerService.update(id, param);
    return result;
  }

  //Delete Banner
  @Delete(BANNER_ENDPOINTS.DELETE_BY_ID)
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @ApiResponse({ type: SuccessResponseDto })
  async delete(@Param('id') id: string) {
    const result = await this.bannerService.delete(id);
    return result;
  }
}
