import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSettings } from '../models/UsersSettings';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

@Resolver()
export class UserSettingsResolver {
  @Mutation(() => UserSettings)
  createUserSettings(
    @Args('createUserSettings') createUserSettings: CreateUserSettingsInput,
  ) {
    const { userId, receiveEmails, receiveNotifications } = createUserSettings;
    mockUserSettings.push({
      userId,
      receiveEmails,
      receiveNotifications,
    });
  }
}
