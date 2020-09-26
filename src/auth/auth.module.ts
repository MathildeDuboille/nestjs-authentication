import { Module } from '@nestjs/common';

import { UsersModule } from '../users/users.module';
import { AzureADStrategy } from './azure.strategy';

@Module({
  imports: [UsersModule],
  providers: [AzureADStrategy],
})
export class AuthModule {}
