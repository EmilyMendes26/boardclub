// CreateProduct.dto.ts
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  descricao: string; // Permitindo que seja opcional/nulo

  @IsNotEmpty()
  @IsNumber()
  preco: number;
}
