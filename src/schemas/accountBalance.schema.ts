import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type AccountBalanceDocument = mongoose.HydratedDocument<AccountBalance>;

@Schema()
export class AccountBalance {
  @Prop()
  iduser: mongoose.Schema.Types.ObjectId;
  @Prop()
  debet: mongoose.Schema.Types.Number;
  @Prop()
  kredit: mongoose.Schema.Types.Number;
  @Prop()
  type: mongoose.Schema.Types.String;
  @Prop()
  timestamp: mongoose.Schema.Types.Date;
  @Prop()
  description: mongoose.Schema.Types.String;
  @Prop()
  idtrans: mongoose.Schema.Types.String;
}

export const AccountBalanceSchema =
  SchemaFactory.createForClass(AccountBalance);
