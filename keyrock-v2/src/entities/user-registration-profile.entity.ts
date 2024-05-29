import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user_registration_profile',
})
export class UserRegistrationProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  activation_key: string;

  @Column()
  activation_expires: Date;

  @Column()
  reset_key?: string;

  @Column()
  reset_expires?: Date;

  @Column()
  verification_key?: string;

  @Column()
  verification_expires?: Date;

  @Column()
  disable_2fa_key?: string;

  @Column()
  disable_2fa_expires?: Date;
}
