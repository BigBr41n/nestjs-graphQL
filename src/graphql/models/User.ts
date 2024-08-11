import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  id: number;
  @Field()
  email: string;
  @Field()
  username: string;
  @Field({ nullable: true })
  displayname?: string;
}
