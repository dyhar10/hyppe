import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UserAuthDocument = mongoose.HydratedDocument<UserAuth>;

@Schema()
export class UserAuth {
  @Prop()
  username: mongoose.Schema.Types.String;
  @Prop()
  password: mongoose.Schema.Types.String;
  @Prop()
  userID: mongoose.Schema.Types.UUID;
  @Prop()
  email: mongoose.Schema.Types.String;
  @Prop()
  regSrc: mongoose.Schema.Types.String;
  @Prop()
  createdAt: mongoose.Schema.Types.Date;
  @Prop()
  updatedAt: mongoose.Schema.Types.Date;
  @Prop()
  isExpiryPass: mongoose.Schema.Types.Boolean;
  @Prop()
  isEmailVerified: mongoose.Schema.Types.Boolean;
  @Prop()
  otpRequestTime: mongoose.Schema.Types.Number;
  @Prop()
  otpAttemp: mongoose.Schema.Types.Number;
  @Prop()
  otpNextAttempAllow: mongoose.Schema.Types.Number;
  @Prop()
  isEnabled: mongoose.Schema.Types.Boolean;
  @Prop()
  isAccountNonExpired: mongoose.Schema.Types.Boolean;
  @Prop()
  isAccountNonLocked: mongoose.Schema.Types.Boolean;
  @Prop()
  isCredentialsNonExpired: mongoose.Schema.Types.Boolean;
  @Prop()
  roles: mongoose.Schema.Types.Array;
  @Prop()
  devices: mongoose.Schema.Types.Array;
  @Prop()
  imei: mongoose.Schema.Types.String;
  @Prop({ type: 'Object' })
  location: object;
  @Prop()
  oneTimePassword: mongoose.Schema.Types.Number;
  @Prop()
  loginSource: mongoose.Schema.Types.String;
}

export const UserAuthSchema = SchemaFactory.createForClass(UserAuth);
