import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/auth/decorator/user.decorator';
import { LoggedInUserDto } from './dto/logged-in-user.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'generated/prisma/enums';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  findProfile(@User() user: LoggedInUserDto) {
    return user;
  }
  
  @Roles(Role.Admin)
  @Patch('profile')
  update(@User() user: LoggedInUserDto, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(user.id, updateUserDto);
  }
}
