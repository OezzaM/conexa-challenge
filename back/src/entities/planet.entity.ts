import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('planet')
export class Planet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  name: string;

  @Column('char', { name: 'url', length: 80, nullable: true })
  url: string;

  @Column()
  @Index()
  rotation_period: string;

  @Column()
  @Index()
  orbital_period: string;

  @Column()
  @Index()
  diameter: string;

  @Column()
  @Index()
  climate: string;

  @Column()
  @Index()
  gravity: string;

  @Column()
  @Index()
  terrain: string;

  @Column()
  @Index()
  population: string;
}
