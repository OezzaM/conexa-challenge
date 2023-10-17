import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  name: string;

  @Column('char', { name: 'url', length: 80, nullable: true })
  url: string;

  @Column()
  @Index()
  height: string;

  @Column()
  @Index()
  mass: string;

  @Column()
  @Index()
  hair_color: string;

  @Column()
  @Index()
  skin_color: string;

  @Column()
  @Index()
  eye_color: string;

  @Column()
  @Index()
  gender: string;
}
