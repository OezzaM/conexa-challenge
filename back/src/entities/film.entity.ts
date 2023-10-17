import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('film')
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ fulltext: true })
  name: string;

  @Column()
  episode_id: number;

  @Column('char', { name: 'url', length: 80, nullable: true })
  url: string;

  @Column('longtext', { nullable: true })
  opening_crawl: string;

  @Column()
  @Index({ fulltext: true })
  director: string;

  @Column()
  @Index({ fulltext: true })
  producer: string;
}
