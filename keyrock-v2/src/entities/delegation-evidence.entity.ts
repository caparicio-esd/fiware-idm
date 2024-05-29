import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'delegation_evidence',
})
export class DelegationEvidence {
  @PrimaryColumn({
    nullable: false,
  })
  @Index()
  policy_issuer: string;

  @Column({
    nullable: false,
  })
  @Index()
  access_subject: string;

  @Column({
    nullable: false,
  })
  policy: string;
}
