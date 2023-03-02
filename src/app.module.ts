import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountBalanceSchema } from './schemas/accountBalance.schema';
import { ContentEventSchema } from './schemas/contentEvent.schema';
import { MediaProfilePictSchema } from './schemas/mediProfilePict.schema';
import { PostSchema } from './schemas/post.schema';
import { TransactionSchema } from './schemas/transaction.schema';
import { UserAuthSchema } from './schemas/userAuth.schema';
import { UserBasicSchema } from './schemas/userBasic.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/db'),
    MongooseModule.forFeature([
      { name: 'AccountBalance', schema: AccountBalanceSchema },
      { name: 'ContentEvent', schema: ContentEventSchema },
      { name: 'MediaProfilePict', schema: MediaProfilePictSchema },
      { name: 'Post', schema: PostSchema },
      { name: 'Transaction', schema: TransactionSchema },
      { name: 'UserAuth', schema: UserAuthSchema },
      { name: 'UserBasic', schema: UserBasicSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
