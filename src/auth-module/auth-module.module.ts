import { Module } from '@nestjs/common';
import { UsersModuleModule } from 'src/users-module/users-module.module';
import { AuthModuleController } from './auth-module.controller';
import { AuthModuleService } from './auth-module.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthModuleController],
  providers: [AuthModuleService, LocalStrategy, JwtStrategy],
  imports: [
    UsersModuleModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'xrwe4543534',
        signOptions: {
          expiresIn: '12h',
        },
      }),
    }),
  ],
})
export class AuthModuleModule {}
