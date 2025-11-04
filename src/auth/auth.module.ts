import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Importa UsersModule para usar UsersService

@Module({
  imports: [UsersModule], // Permite que o AuthService use o UsersService
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}