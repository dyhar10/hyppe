import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type MediaProfilePictDocument =
  mongoose.HydratedDocument<MediaProfilePict>;

@Schema()
export class MediaProfilePict extends Document {
  @Prop()
  mediaID: mongoose.Schema.Types.UUID;
  @Prop()
  active: mongoose.Schema.Types.Boolean;
  @Prop()
  createdAt: mongoose.Schema.Types.Date;
  @Prop()
  updatedAt: mongoose.Schema.Types.Date;
  @Prop()
  postType: mongoose.Schema.Types.String;
  @Prop()
  mediaType: mongoose.Schema.Types.String;
  @Prop()
  mediaBasePath: mongoose.Schema.Types.String;
  @Prop()
  mediaUri: mongoose.Schema.Types.String;
  @Prop()
  originalName: mongoose.Schema.Types.String;
  @Prop()
  fsSourceUri: mongoose.Schema.Types.String;
  @Prop()
  fsSourceName: mongoose.Schema.Types.String;
  @Prop()
  fsTargetUri: mongoose.Schema.Types.String;
  @Prop()
  mediaMime: mongoose.Schema.Types.String;
}

export const MediaProfilePictSchema =
  SchemaFactory.createForClass(MediaProfilePict);
