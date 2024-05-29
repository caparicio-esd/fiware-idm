import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'role_permission',
})
export class RolePermissions {
  @PrimaryGeneratedColumn()
  id: number;
}
