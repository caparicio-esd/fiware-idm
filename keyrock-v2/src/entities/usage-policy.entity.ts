import { MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UsagePolicyType {
  COUNT_POLICY = 'COUNT_POLICY',
  AGGREGATION_POLICY = 'AGGREGATION_POLICY',
  CUSTOM_POLICY = 'CUSTOM_POLICY',
}

export enum UsagePolicyPunishment {
  KILL_JOB = 'KILL_JOB',
  UNSUBSCRIBE = 'UNSUBSCRIBE',
  MONETIZE = 'MONETIZE',
}

@Entity({
  name: 'usage_policy',
})
export class UsagePolicy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MaxLength(255)
  name: string;

  @Column()
  description: string;

  @Column({
    enum: UsagePolicyType,
  })
  type: UsagePolicyType;

  @Column({
    type: 'json',
  })
  parameters: string;

  @Column({
    enum: UsagePolicyPunishment,
  })
  punishment: UsagePolicyPunishment;

  @Column()
  from: Date;

  @Column()
  to: Date;

  @Column({
    type: 'json',
  })
  odrl: Date;
}
