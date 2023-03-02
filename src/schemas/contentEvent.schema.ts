import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type ContentEventDocument = mongoose.HydratedDocument<ContentEvent>;

@Schema()
export class ContentEvent {
  @Prop()
  contentEventID: mongoose.Schema.Types.ObjectId;
  @Prop()
  email: mongoose.Schema.Types.String;
  @Prop()
  eventType: mongoose.Schema.Types.String;
  @Prop()
  active: mongoose.Schema.Types.Boolean;
  @Prop()
  event: mongoose.Schema.Types.String;
  @Prop()
  createdAt: mongoose.Schema.Types.Date;
  @Prop()
  updatedAt: mongoose.Schema.Types.Date;
  @Prop()
  sequenceNumber: mongoose.Schema.Types.Number;
  @Prop()
  flowIsDone: mongoose.Schema.Types.Boolean;
  @Prop()
  senderParty: mongoose.Schema.Types.String;
  @Prop()
  postID: mongoose.Schema.Types.ObjectId;
  @Prop()
  receieverParty: mongoose.Schema.Types.String;
  @Prop()
  transitions: mongoose.Schema.Types.String;
  @Prop()
  parentContentEventID: mongoose.Schema.Types.String;
  @Prop()
  reactionUri: mongoose.Schema.Types.String;
}

export const ContentEventSchema = SchemaFactory.createForClass(ContentEvent);
