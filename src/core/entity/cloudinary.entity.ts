import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseEntity } from "@Shared/base/entity";

export type CloudinaryDocument = HydratedDocument<Cloudinary>;

export class Cloudinary extends BaseEntity {

  @Prop({
    name: 'public_id',
    required: [true, 'public_id name is required'],
    unique: true,
  })
  publicId: string;

  @Prop({
    name: 'url',
    required: [true, 'url is required'],
  })
  url: string;
}

