import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { User } from 'src/auth/decorator/user.decorator';
import { LoggedInUserDto } from '../users/dto/logged-in-user.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'generated/prisma/enums';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@User() user: LoggedInUserDto) {
    return this.accountsService.create(user.id);
  }

  @Get('/account-number/:account_number')
  findOne(@User() user: LoggedInUserDto, @Param('account_number') accountNumber: string) {
    return this.accountsService.findOne(user, accountNumber);
  }
  
  @Get()
  findAllByUserId(@User() user: LoggedInUserDto) {
    return this.accountsService.findAllByUserId(user.id);
  }
  
  @Roles(Role.Admin)
  @Get('/all-accounts')
  findAll() {
    return this.accountsService.findAll();
  }

  @Roles(Role.Admin)
  @Patch()
  update(@Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(updateAccountDto);
  }

  @Delete(':account_number')
  remove(@User() user: LoggedInUserDto, @Param('account_number') accountNumber: string) {
    return this.accountsService.remove(user, accountNumber);
  }
}
