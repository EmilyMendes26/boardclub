import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
=======
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forFeature([Product]), // <-- necessário!
  ],
>>>>>>> master
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
