import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({type: 'uuid' })
  id: string;

  @Column()
  nome: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column()
  telefone: string;
}
