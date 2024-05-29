import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'trusted_application',
})
export class TrustedApplication {
  @PrimaryGeneratedColumn()
  id: number;
}
