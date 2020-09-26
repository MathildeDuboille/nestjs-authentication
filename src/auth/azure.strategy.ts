import { BearerStrategy, ITokenPayload, VerifyCallback } from 'passport-azure-ad';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';

@Injectable()
export class AzureADStrategy extends PassportStrategy(BearerStrategy, 'azure-ad') {
  constructor(private readonly userService: UsersService) {
    super(
      {
        identityMetadata: process.env.AZURE_IDENTITY_METADATA_URL,
        clientID: process.env.AZURE_CLIENT_ID,
        loggingLevel: 'info',
        validateIssuer: false,
      },
      async (
        token: ITokenPayload & { preferred_username: string }, done: VerifyCallback) => {
        try {
          const user = await this.userService.getUserByEmail(token.preferred_username);
          return done(null, user, token);
        } catch (error) {
          return done(error);
        }
      },
    );
  }
}
