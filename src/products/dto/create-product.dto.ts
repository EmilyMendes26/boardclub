// CreateProduct.dto.ts
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  descricao: string; // Permitindo que seja opcional/nulo

  @IsString()
  imageURL: string;

  @IsString()
  status: string;

  @IsNotEmpty()
  @IsNumber()
  preco: number;

  @IsNumber()
  id: number
}
