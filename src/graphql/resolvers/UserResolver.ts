import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';

@Resolver()
export class userResolver {
  @Query(() => User)
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }
}
