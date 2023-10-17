import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('starship')
export class Starship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ fulltext: true })
  name: string;

  @Column('char', { name: 'url', length: 80, nullable: true })
  url: string;

  @Column()
  @Index({ fulltext: true })
  model: string;

  @Column()
  @Index({ fulltext: true })
  manufacturer: string;

  @Column()
  @Index({ fulltext: true })
  crew: string;

  @Column()
  @Index({ fulltext: true })
  passengers: string;

  @Column()
  @Index({ fulltext: true })
  consumables: string;

  @Column()
  @Index({ fulltext: true })
  starship_class: string;
}
