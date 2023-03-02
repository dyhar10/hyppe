import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type TransactionDocument = mongoose.HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  @Prop()
  noinvoice: mongoose.Schema.Types.String;
  @Prop()
  postid: mongoose.Schema.Types.String;
  @Prop()
  idusersell: mongoose.Schema.Types.String;
  @Prop()
  iduserbuyer: mongoose.Schema.Types.String;
  @Prop()
  amount: mongoose.Schema.Types.Number;
  @Prop()
  paymentmethod: mongoose.Schema.Types.String;
  @Prop()
  status: mongoose.Schema.Types.String;
  @Prop()
  description: mongoose.Schema.Types.String;
  @Prop()
  nova: mongoose.Schema.Types.Number;
  @Prop()
  expiredtimeva: mongoose.Schema.Types.Date;
  @Prop()
  salelike: mongoose.Schema.Types.Boolean;
  @Prop()
  saleview: mongoose.Schema.Types.Boolean;
  @Prop()
  bank: mongoose.Schema.Types.String;
  @Prop()
  ppn: mongoose.Schema.Types.Number;
  @Prop()
  totalAmount: mongoose.Schema.Types.Number;
  @Prop()
  accountbalance: mongoose.Schema.Types.String;
  @Prop()
  timestamp: mongoose.Schema.Types.Date;
  @Prop({ type: 'Object' })
  payload: object;
  @Prop()
  idva: mongoose.Schema.Types.String;
  @Prop()
  type: mongoose.Schema.Types.String;
  @Prop()
  detail: mongoose.Schema.Types.Array;
  @Prop({ type: 'Object' })
  response: object;
  @Prop()
  updatedAt: mongoose.Schema.Types.Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
