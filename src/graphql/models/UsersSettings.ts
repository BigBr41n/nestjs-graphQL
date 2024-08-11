import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSettings {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  userId: number;

  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Field({ defaultValue: false })
  receiveEmails: boolean;
}
