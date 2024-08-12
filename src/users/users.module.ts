import { Module } from '@nestjs/common';
import { userResolver } from './UserResolver';
import { UserService } from './UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSettingService } from './UserSettingsService';
import { UserSettings } from 'src/graphql/models/UsersSettings';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSettings])],
  providers: [userResolver, UserService, UserSettingService],
  exports: [],
})
export class UsersModule {}
