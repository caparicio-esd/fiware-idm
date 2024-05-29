import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'role_assignment',
})
export class RoleAssignments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role_organization: string;
}
