import { Controller, UseGuards, Request } from '@nestjs/common';
import { AuthModuleService } from './auth-module.service';
import { Injectable, Post, Body } from '@nestjs/common';
import { RegisterDTO } from './dtos/register.dto';
import { LocalAuthGuard } from './local-auth.guard';
@Controller('auth-module')
export class AuthModuleController {
  constructor(private authService: AuthModuleService) {}

  @Post('/register')
  public register(@Body() userData: RegisterDTO) {
    return this.authService.register(userData);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
