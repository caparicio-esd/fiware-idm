import { MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'organization',
})
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(64)
  name: string;

  @Column()
  description: string;

  @Column()
  @MaxLength(2000)
  website: string;

  @Column()
  @MaxLength(2000)
  image: string;
}
