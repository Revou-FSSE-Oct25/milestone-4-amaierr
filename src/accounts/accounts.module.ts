import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountsRepository } from './accounts.repository';
import { UsersRepository } from 'src/users/users.repository';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, AccountsRepository, UsersRepository],
})
export class AccountsModule {}
