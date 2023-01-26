import { Module } from '@nestjs/common';
import { AuthModuleController } from './auth-module.controller';
import { AuthModuleService } from './auth-module.service';

@Module({
  controllers: [AuthModuleController],
  providers: [AuthModuleService]
})
export class AuthModuleModule {}
