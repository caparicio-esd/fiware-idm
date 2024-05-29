import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'role_usage_policy',
})
export class RoleUsagePolicy {
  @PrimaryGeneratedColumn()
  id: number;
}
