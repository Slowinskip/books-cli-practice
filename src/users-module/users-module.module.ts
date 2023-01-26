import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UsersModuleController } from './users-module.controller';
import { UsersModuleService } from './users-module.service';

@Module({
  controllers: [UsersModuleController],
  providers: [UsersModuleService, PrismaService],
})
export class UsersModuleModule {}
