import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { IsBoolean, IsDate, IsEmail, IsJSON, MaxLength } from 'class-validator';
import { createHmac, randomBytes } from 'crypto';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(64)
  username: string;

  @Column()
  description: string;

  @Column()
  @MaxLength(2000)
  website: string;

  @Column({
    default: 'default',
  })
  @MaxLength(2000)
  image: string;

  @Column({
    default: false,
  })
  @IsBoolean()
  gravatar: boolean;

  @Column({
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column()
  salt?: string;

  @Column({})
  @MaxLength(40)
  password?: string;

  @Column()
  @IsDate()
  date_password?: Date;

  @Column({
    default: false,
  })
  @IsBoolean()
  enabled: boolean;

  @Column({
    default: false,
  })
  @IsBoolean()
  admin: boolean;

  @Column({
    default: false,
  })
  @IsBoolean()
  starters_tour_ended: boolean;

  @Column({
    default: null,
  })
  eidas_id: string;

  @Column({
    default: JSON.stringify({}),
  })
  @IsJSON()
  extra: string;

  @Column()
  @MaxLength(2000)
  scope: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  setPassword() {
    const salt = randomBytes(16).toString('hex').slice(0, 16);
    const encrypted = createHmac('sha1', salt)
      .update(this.password)
      .digest('hex');
    this.salt = salt;
    this.password = encrypted;
    this.date_password = new Date();
  }
}
