import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal')
  valor: number;

  @Column()
  genero: string;

  @OneToMany(() => ProductImage, image => image.product, {
    cascade: true,
    eager: true, // carrega as imagens automaticamente ao buscar o produto
})
  images: ProductImage[];
}