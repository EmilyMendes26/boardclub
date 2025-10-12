import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]) // <-- necessário!
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService] // se for usar em outro módulo
})
export class UsersModule {}
