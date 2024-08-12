import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSettings } from '../models/UsersSettings';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { UserSettingService } from 'src/users/UserSettingsService';

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingsService: UserSettingService) {}
  @Mutation(() => UserSettings)
  async createUserSettings(
    @Args('createUserSettings') createUserSettingsData: CreateUserSettingsInput,
  ) {
    const userSetting = await this.userSettingsService.createUserSettings(
      createUserSettingsData,
    );
    return userSetting;
  }
}
