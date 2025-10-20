import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // 1. Gerar o hash da senha
    const newID = uuidv4();

    const saltRounds = 10; // Custo do hash (pode ser configurado)
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltRounds,
    );
    const existingUser = await this.findOneByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Este email já está cadastrado.');
    }

    
    // 2. Criar um DTO modificado para incluir o hash
    const userToSave = {
      id: newID,
      ...createUserDto,
      password: hashedPassword, // Substitui a senha em texto simples pelo hash
    };

    // 3. Salvar o usuário
    const user = this.usersRepository.create(userToSave);
    return this.usersRepository.save(user);
  }

  // ... outras funções (findAll, findOne, findOneByEmail, update, remove)

  // Adicionar uma função para buscar por email para o login
  findOneByEmail(email: string): Promise<User | null> {
    // Note: No TypeORM 0.3+, findOneBy é preferido para buscar por uma única propriedade
    return this.usersRepository.findOneBy({ email });
  }

  findAll() {
    return this.usersRepository.find();
  }

  update(email:string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(email, updateUserDto);
  }

  remove(email:string) {
    return this.usersRepository.delete(email);
  }
}
