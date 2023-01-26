import { Controller, UseGuards, Request, Response } from '@nestjs/common';
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
  async login(@Request() req, @Response() res) {
    const tokens = await this.authService.createSession(req.user);
    res.cookie('auth', tokens, { httpOnly: true });
    res.send({
      message: 'success',
    });
  }
}
