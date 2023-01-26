import { UsersModuleService } from './users-module.service';
import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { ParseUUIDPipe } from '@nestjs/common/pipes';

@Controller('users-module')
export class UsersModuleController {
  constructor(private userService: UsersModuleService) {}

  @Get('/')
  getAll() {
    return this.userService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await this.userService.getById(id);
    if (!user) throw new Error('User not found');
    return user;
  }
}
