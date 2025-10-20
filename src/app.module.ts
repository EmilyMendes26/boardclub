import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost', // ou nome do serviço no docker-compose, ex: "mariadb"
      port: 3306,
      username: 'boardclubTeam',
      password: '123',
      database: 'boardclub',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ só em desenvolvimento
    }),
    UsersModule,
    TypeOrmModule.forFeature([User]),
    ProductsModule,
    TypeOrmModule.forFeature([Product]),
    AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
