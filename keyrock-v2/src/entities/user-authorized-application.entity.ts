import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user_authorized_application',
})
export class UserAuthorizedApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shared_attributes: string;

  @Column({
    default: Date.now(),
  })
  login_date: Date;
}
