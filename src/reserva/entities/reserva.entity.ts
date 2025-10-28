import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Products } from 'src/products/entities/products.entity';

@Entity('reserva')
export class ReservaEntity {
 @PrimaryColumn()
 id_cliente :  number;

 @PrimaryColumn()
 id_produto: number;

 @ManyToOne(() => User, (user) => user.id, {eager: true})
 @JoinColumn({ name: 'id_cliente'})
 user: User;

 @ManyToOne(() => Products, (product) => product.id, {eager: true})
 @JoinColumn({ name: 'id_produto'})
 product: Products;

 @Column({ type: 'date' })
 data_reserva: Date;

 @Column({ type: 'date' })
 data_devolucao: Date;


}
