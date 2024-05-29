import { MaxLength } from 'class-validator';
import { randomBytes, createHmac } from 'crypto';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'pep_proxy',
})
export class PepProxy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(40)
  password: string;

  @Column()
  salt: string;

  // TODO duplicate with user.entity.ts
  @BeforeInsert()
  setPassword() {
    const salt = randomBytes(16).toString('hex').slice(0, 16);
    const encrypted = createHmac('sha1', salt)
      .update(this.password)
      .digest('hex');
    this.salt = salt;
    this.password = encrypted;
  }
}
