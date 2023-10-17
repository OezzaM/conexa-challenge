import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ fulltext: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
