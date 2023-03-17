import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nav {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
