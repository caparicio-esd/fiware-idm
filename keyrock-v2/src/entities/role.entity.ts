import { MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'role',
})
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(64)
  name: string;

  @Column({
    default: false,
  })
  is_internal: boolean;
}
