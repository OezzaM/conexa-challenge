import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ fulltext: true })
  name: string;

  @Column('char', { name: 'url', length: 80, nullable: true })
  url: string;

  @Column()
  @Index({ fulltext: true })
  height: string;

  @Column()
  @Index({ fulltext: true })
  mass: string;

  @Column()
  @Index({ fulltext: true })
  hair_color: string;

  @Column()
  @Index({ fulltext: true })
  skin_color: string;

  @Column()
  @Index({ fulltext: true })
  eye_color: string;

  @Column()
  @Index({ fulltext: true })
  gender: string;
}
