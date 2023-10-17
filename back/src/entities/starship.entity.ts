import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('starship')
export class Starship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  name: string;

  @Column('char', { name: 'url', length: 80, nullable: true })
  url: string;

  @Column()
  @Index()
  model: string;

  @Column()
  @Index()
  manufacturer: string;

  @Column()
  @Index()
  crew: string;

  @Column()
  @Index()
  passengers: string;

  @Column()
  @Index()
  consumables: string;

  @Column()
  @Index()
  starship_class: string;
}
