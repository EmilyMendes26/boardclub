import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth') // Rota base: /auth
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') // Rota: /auth/login
  @HttpCode(HttpStatus.OK) // Retorna 200 em caso de sucesso (em vez do 201 padrão do POST)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}