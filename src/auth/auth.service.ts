import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto'; // Você precisará criar este DTO

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    // 1. Busca o usuário pelo email
    const user = await this.usersService.findOneByEmail(email);
    
    if (user) {
      // 2. Compara a senha fornecida com o hash salvo no banco
      const isMatch = await bcrypt.compare(pass, user.password);

      if (isMatch) {
        // Se a senha for válida, retorna o usuário (sem a senha!)
        // Desestruturação para remover a senha do objeto de retorno
        const { password, ...result } = user; 
        return result;
      }
    }
    // Lança exceção se não encontrar ou se a senha estiver incorreta
    throw new UnauthorizedException('Credenciais inválidas');
  }
  
  async login(loginDto: LoginDto) {
    // Apenas chama a validação. Em um cenário real, você geraria um JWT aqui.
    return this.validateUser(loginDto.email, loginDto.password);
  }
}