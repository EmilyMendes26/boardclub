import{Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column('decimal')
    preco: number;

    @Column()
    usr_cadastro: string;

    @Column()
    status: string;

    @Column()
    desc: string

    @Column()
    imageURL: string

    @Column()
    genero: string;
}
