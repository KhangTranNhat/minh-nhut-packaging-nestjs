import { BaseRepositoryAbstract } from "@Core/repositories/base/repository.abstract";
import { Banner, BannerDocument } from "@Core/entity";
import { Injectable } from "@nestjs/common";
import { BannerRepositoryInterface } from "@Core/repositories";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class BannerRepository
  extends BaseRepositoryAbstract<Banner>
  implements BannerRepositoryInterface
{
  constructor(
    @InjectModel(Banner.name)
    private readonly repository: Model<BannerDocument>,
  ) {
    super(repository);
  }
}