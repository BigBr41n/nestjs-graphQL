import { Module } from '@nestjs/common';
import { userResolver } from './UserResolver';
import { UserService } from './UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../graphql/models/User';
import { UserSettingService } from './UserSettingsService';
import { UserSettings } from '../graphql/models/UsersSettings';
import { UserSettingsResolver } from '../graphql/resolvers/UserSettingsResolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSettings])],
  providers: [
    userResolver,
    UserService,
    UserSettingService,
    UserSettingsResolver,
  ],
  exports: [],
})
export class UsersModule {}
