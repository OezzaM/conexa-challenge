import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('planet')
export class Planet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ fulltext: true })
  name: string;

  @Column('char', { name: 'url', length: 80, nullable: true })
  url: string;

  @Column()
  @Index({ fulltext: true })
  rotation_period: string;

  @Column()
  @Index({ fulltext: true })
  orbital_period: string;

  @Column()
  @Index({ fulltext: true })
  diameter: string;

  @Column()
  @Index({ fulltext: true })
  climate: string;

  @Column()
  @Index({ fulltext: true })
  gravity: string;

  @Column()
  @Index({ fulltext: true })
  terrain: string;

  @Column()
  @Index({ fulltext: true })
  population: string;
}
