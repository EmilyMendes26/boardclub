import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
<<<<<<<< HEAD:src/company/entities/company.entity.ts
export class Company {
========
export class Product {
>>>>>>>> master:src/products/entities/product.entity.ts
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
<<<<<<<< HEAD:src/company/entities/company.entity.ts
  email: string;

  @Column()
  password: string;

  @Column()
  cnpj: number;
}
========
  descricao: string;

  @Column('decimal')
  preco: number;
}
>>>>>>>> master:src/products/entities/product.entity.ts
