import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type PostDocument = mongoose.HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  postID: mongoose.Schema.Types.ObjectId;
  @Prop()
  email: mongoose.Schema.Types.String;
  @Prop()
  postType: mongoose.Schema.Types.String;
  @Prop()
  description: mongoose.Schema.Types.String;
  @Prop()
  active: mongoose.Schema.Types.Boolean;
  @Prop()
  createdAt: mongoose.Schema.Types.Date;
  @Prop()
  updatedAt: mongoose.Schema.Types.Date;
  @Prop()
  expiration: mongoose.Schema.Types.Date;
  @Prop()
  visibility: mongoose.Schema.Types.String;
  @Prop()
  location: mongoose.Schema.Types.String;
  @Prop()
  tags: mongoose.Schema.Types.Array;
  @Prop()
  allowComments: mongoose.Schema.Types.Boolean;
  @Prop()
  isSafe: mongoose.Schema.Types.Boolean;
  @Prop()
  isOwned: mongoose.Schema.Types.Boolean;
  @Prop({ type: 'Object' })
  metadata: object;
  @Prop()
  likes: mongoose.Schema.Types.Number;
  @Prop()
  views: mongoose.Schema.Types.Number;
  @Prop()
  shares: mongoose.Schema.Types.Number;
  @Prop()
  comments: mongoose.Schema.Types.Number;
  @Prop()
  reactions: mongoose.Schema.Types.Number;
  @Prop()
  userProfile: mongoose.Schema.Types.String;
  @Prop()
  contentMedias: mongoose.Schema.Types.Array;
  @Prop()
  isCertified: mongoose.Schema.Types.Boolean;
  @Prop()
  saleLike: mongoose.Schema.Types.Number;
  @Prop()
  saleView: mongoose.Schema.Types.Number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
