import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
     @PrimaryGeneratedColumn()
      id: number;
    
      @Column()
      nome: string;
    
      @Column()
      generos: string;
    
      @Column()
      descrição: string;

      @Column("decimal")
      preco: number;
}
