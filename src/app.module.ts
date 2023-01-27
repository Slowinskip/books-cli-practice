import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { UsersModuleModule } from './users-module/users-module.module';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
@Module({
  imports: [
    AuthorsModule,
    BooksModule,
    UsersModuleModule,
    AuthModuleModule,
    PrismaModule,
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
