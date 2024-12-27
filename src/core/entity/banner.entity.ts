import { BaseEntity } from '@Shared/base';
import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Cloudinary } from '@Core/entity/cloudinary.entity';

export type BannerDocument = HydratedDocument<Banner>;

export class Banner extends BaseEntity {
  @Prop({
    name: 'name',
    required: [true, 'Banner name is required'],
    minlength: [2, 'Banner name must be at least 2 characters long'],
    maxlength: [100, 'Banner name must not exceed 100 characters'],
    unique: true,
  })
  name: string;

  @Prop({
    name: 'image',
    type: Cloudinary,
    required: [true, 'Banner image is required'],
  })
  image: Cloudinary;
}

export const BannerSchema = SchemaFactory.createForClass(Banner);
