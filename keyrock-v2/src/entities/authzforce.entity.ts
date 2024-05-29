import { IsInt } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'authzforce',
})
export class AuthzForce {
  @PrimaryColumn()
  az_domain: string;

  @Column('uuid')
  policy: string;

  @Column()
  @IsInt()
  type: number;
}
