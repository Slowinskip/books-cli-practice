import { Module } from '@nestjs/common';
import { UsersModuleModule } from 'src/users-module/users-module.module';
import { UsersModuleService } from 'src/users-module/users-module.service';
import { AuthModuleController } from './auth-module.controller';
import { AuthModuleService } from './auth-module.service';

@Module({
  controllers: [AuthModuleController],
  providers: [AuthModuleService],
  imports: [UsersModuleModule],
})
export class AuthModuleModule {}
