import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {
  MediaProfilePict,
  MediaProfilePictSchema,
} from './mediProfilePict.schema';

export type UserBasicDocument = mongoose.HydratedDocument<UserBasic>;

@Schema()
export class UserBasic extends Document {
  @Prop()
  profileID: mongoose.Schema.Types.UUID;
  @Prop()
  email: mongoose.Schema.Types.String;
  @Prop()
  fullName: mongoose.Schema.Types.String;
  @Prop()
  dob: mongoose.Schema.Types.Date;
  @Prop()
  gender: mongoose.Schema.Types.String;
  @Prop()
  mobileNumber: mongoose.Schema.Types.String;
  @Prop()
  status: mongoose.Schema.Types.String;
  @Prop()
  event: mongoose.Schema.Types.String;
  @Prop()
  idProofName: mongoose.Schema.Types.String;
  @Prop()
  idProofNumber: mongoose.Schema.Types.String;
  @Prop()
  idProofStatus: mongoose.Schema.Types.String;
  @Prop()
  isComplete: mongoose.Schema.Types.Boolean;
  @Prop()
  isCelebrity: mongoose.Schema.Types.Boolean;
  @Prop()
  isIdVerified: mongoose.Schema.Types.Boolean;
  @Prop()
  isPrivate: mongoose.Schema.Types.Boolean;
  @Prop()
  isFollowPrivate: mongoose.Schema.Types.Boolean;
  @Prop()
  isPostPrivate: mongoose.Schema.Types.Boolean;
  @Prop()
  createdAt: mongoose.Schema.Types.Date;
  @Prop()
  updatedAt: mongoose.Schema.Types.Date;
  @Prop()
  bio: mongoose.Schema.Types.String;
  @Prop({
    type: mongoose.Schema.Types.UUID,
    _id: mongoose.Schema.Types.UUID,
    ref: 'mediaprofilepicts',
  })
  profilePict: object;
  @Prop()
  proofPict: mongoose.Schema.Types.String;
  @Prop()
  insight: mongoose.Schema.Types.String;
  @Prop()
  userInterest: mongoose.Schema.Types.Array;
  @Prop()
  userAuth: mongoose.Schema.Types.String;
  @Prop()
  countries: mongoose.Schema.Types.String;
  @Prop()
  languages: mongoose.Schema.Types.String;
  @Prop()
  statusKyc: mongoose.Schema.Types.String;
  @Prop()
  imei: mongoose.Schema.Types.String;
  @Prop()
  icon: mongoose.Schema.Types.Boolean;
  @Prop()
  timeEmailSend: mongoose.Schema.Types.Date;
  @Prop()
  cities: mongoose.Schema.Types.String;
  @Prop()
  states: mongoose.Schema.Types.String;
  @Prop()
  listAddKyc: mongoose.Schema.Types.Array;
  @Prop()
  reportedUser: mongoose.Schema.Types.Array;
  @Prop()
  reportedUserHandle: mongoose.Schema.Types.Array;
  @Prop()
  userAssets: mongoose.Schema.Types.Array;
}

export const UserBasicSchema = SchemaFactory.createForClass(UserBasic);
