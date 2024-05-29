import { MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user_organization',
})
export class UserOrganization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MaxLength(10)
  role: string;
}
