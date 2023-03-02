import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { UserBasic, UserBasicDocument } from './schemas/userBasic.schema';
import constant from './constant';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Post.name)
    private postModel: Model<PostDocument>,
    @InjectModel(UserBasic.name)
    private userBasicModel: Model<UserBasicDocument>,
  ) {}

  async getSearch(keywords: string): Promise<{
    user: UserBasic[];
    pict: Post[];
    vid: Post[];
    diary: Post[];
  }> {
    const user = await this.userBasicModel
      .aggregate()
      .lookup({
        from: 'userauths',
        localField: 'profileID',
        foreignField: 'userID',
        as: 'userAuth',
        pipeline: [
          {
            $match: {
              username: {
                $regex: keywords,
                $options: 'i',
              },
            },
          },
        ],
      })
      .unwind('userAuth')
      .lookup({
        from: 'mediaprofilepicts',
        localField: 'profilePict.$id',
        foreignField: '_id',
        as: 'avatar',
      })
      .unwind('avatar')
      .project({
        _id: 1,
        fullName: 1,
        profilePict: 1,
        username: '$userAuth.username',
        email: '$userAuth.email',
        avatar: {
          _id: '$avatar._id',
          mediaType: '$avatar.mediaType',
          mediaBasePath: '$avatar.mediaBasePath',
          mediaUri: '$avatar.mediaUri',
          originalName: '$avatar.originalName',
          fsSourceUri: '$avatar.fsSourceUri',
          fsSourceName: '$avatar.fsSourceName',
          fsTargetUri: '$avatar.fsTargetUri',
          mediaEndpoint: `$avatar.postType`,
        },
      })
      .limit(constant.LIMIT_RESULT)
      .sort('-userAuth.username');

    // return picts
    const pict = await this.postModel
      .aggregate()
      .match({ postType: constant.POST_TYPE.PICTURE })
      .lookup({
        from: 'contentevents',
        localField: 'postID',
        foreignField: 'postID',
        as: 'postContentEvent',
      })
      .unwind('postContentEvent')
      .limit(constant.LIMIT_RESULT)
      .addFields({
        insight: { shares: null, comments: null, views: null, likes: null },
      })
      .project({
        boosted: 1,
        _id: 1,
        mediaThumbEnpoint: 1,
        mediaEndpoint: 1,
        mediaType: 1,
        createdAt: 1,
        updatedAt: 1,
        postID: 1,
        email: 1,
        postType: 1,
        description: 1,
        active: 1,
        location: 1,
        isOwned: 1,
        visibility: 1,
        allowComments: 1,
        insight: {
          shares: '$shares',
          comments: '$comments',
          views: '$views',
          likes: '$likes',
        },
      });

    // return vid
    const vid = await this.postModel
      .aggregate()
      .match({ postType: constant.POST_TYPE.VIDEO })
      .lookup({
        from: 'contentevents',
        localField: 'postID',
        foreignField: 'postID',
        as: 'postContentEvent',
      })
      .unwind('postContentEvent')
      .addFields({
        insight: { shares: null, comments: null, views: null, likes: null },
      })
      .limit(constant.LIMIT_RESULT)
      .project({
        boosted: 1,
        _id: 1,
        mediaThumbEnpoint: 1,
        mediaEndpoint: 1,
        mediaType: 1,
        createdAt: 1,
        updatedAt: 1,
        postID: 1,
        email: 1,
        postType: 1,
        description: 1,
        active: 1,
        metadata: 1,
        location: 1,
        isOwned: 1,
        visibility: 1,
        allowComments: 1,
        insight: {
          shares: '$shares',
          comments: '$comments',
          views: '$views',
          likes: '$likes',
        },
      });

    // return diary
    const diary = await this.postModel
      .aggregate()
      .match({ postType: constant.POST_TYPE.DIARY })
      .lookup({
        from: 'contentevents',
        localField: 'postID',
        foreignField: 'postID',
        as: 'postContentEvent',
      })
      .unwind('postContentEvent')
      .addFields({
        insight: { shares: null, comments: null, views: null, likes: null },
      })
      .limit(constant.LIMIT_RESULT)
      .project({
        boosted: 1,
        _id: 1,
        mediaThumbEnpoint: 1,
        mediaEndpoint: 1,
        mediaType: 1,
        createdAt: 1,
        updatedAt: 1,
        postID: 1,
        email: 1,
        postType: 1,
        description: 1,
        active: 1,
        location: 1,
        isOwned: 1,
        visibility: 1,
        allowComments: 1,
        insight: {
          shares: '$shares',
          comments: '$comments',
          views: '$views',
          likes: '$likes',
        },
      });

    return { user, pict, vid, diary };
  }

  async getTrxHistory(keywords: string): Promise<UserBasic[]> {
    const reward = await this.userBasicModel
      .aggregate()
      .match({
        email: keywords,
      })
      .lookup({
        from: 'accountbalances',
        localField: '_id',
        foreignField: 'iduser',
        as: 'accountbalance',
      })
      .limit(1);
    return reward;
  }
}
