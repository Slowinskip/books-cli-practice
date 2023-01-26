import { Module } from '@nestjs/common';
import { UsersModuleModule } from 'src/users-module/users-module.module';
import { AuthModuleController } from './auth-module.controller';
import { AuthModuleService } from './auth-module.service';
import { LocalStrategy } from './local.strategy';

@Module({
  controllers: [AuthModuleController],
  providers: [AuthModuleService, LocalStrategy],
  imports: [UsersModuleModule],
})
export class AuthModuleModule {}
