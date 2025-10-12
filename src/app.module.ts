import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',   // ou nome do serviço no docker-compose, ex: "mariadb"
      port: 3306,
      username: 'boardclubTeam',
      password: '123',
      database: 'boardclub',
      autoLoadEntities: true,
      synchronize: false, // ⚠️ só em desenvolvimento
    }),
    UsersModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
