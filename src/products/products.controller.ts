<<<<<<< HEAD
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { unlink } from 'fs/promises';
import { join } from 'path';
=======
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
>>>>>>> master

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

<<<<<<< HEAD
@Post()
@UseInterceptors(
  FileInterceptor('imageURL', {
    storage: diskStorage({
      destination: './img',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename);
      },
    }),
  }),
  
)
async create(
  @Body() createProductDto: CreateProductDto,
  @UploadedFile() file: Express.Multer.File,
) {
  if (file) {
    createProductDto.imageURL = `./img/${file.filename}`;
  }
  return this.productsService.create(createProductDto);
}
=======
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
>>>>>>> master

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

<<<<<<< HEAD
@Delete(':id')
async remove(@Param('id') id: string) {
  const product = await this.productsService.findOne(+id);

  if (product?.imageURL) {
    const filePath = join(process.cwd(), product.imageURL);
    try {
      await unlink(filePath);
      console.log(`Imagem deletada: ${filePath}`);
    } catch (error) {
      console.warn(`Erro ao deletar imagem: ${error.message}`);
    }
  }

  return this.productsService.remove(+id);
}
=======
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
>>>>>>> master
}
