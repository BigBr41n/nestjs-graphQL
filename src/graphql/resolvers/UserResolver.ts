import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSettings } from '../models/UsersSettings';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

@Resolver(() => User)
export class userResolver {
  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User], { nullable: true })
  getAllUsers() {
    return mockUsers;
  }

  @ResolveField(() => UserSettings, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }

  @Mutation(() => User)
  createUser(
    @Args('username') username: string,
    @Args('displayName', { nullable: true }) displayName: string,
    @Args('email') email: string,
  ) {
    const newUser = {
      id: Math.floor(Math.random() * 101),
      username,
      displayName,
      email,
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
