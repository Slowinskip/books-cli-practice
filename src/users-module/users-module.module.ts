import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModuleController } from './users-module.controller';
import { UsersModuleService } from './users-module.service';

@Module({
  controllers: [UsersModuleController],
  providers: [UsersModuleService],
  imports: [PrismaModule],
  exports: [UsersModuleService],
})
export class UsersModuleModule {}
