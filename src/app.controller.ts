import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from './schemas/post.schema';
import { UserBasic } from './schemas/userBasic.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search')
  async getSearch(@Query('keywords') keywords: string): Promise<{
    user: UserBasic[];
    pict: Post[];
    vid: Post[];
    diary: Post[];
  }> {
    return this.appService.getSearch(keywords);
  }

  @Get('/trxhistory')
  async getTrxHistory(
    @Query('keywords') keywords: string,
  ): Promise<UserBasic[]> {
    return await this.appService.getTrxHistory(keywords);
  }
}
