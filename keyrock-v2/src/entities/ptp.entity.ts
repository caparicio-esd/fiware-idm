import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'ptp',
})
export class Ptp {
  @PrimaryGeneratedColumn()
  id: number;

  //@PrimaryColumn()
  @Column()
  previous_job_id: string;
}
