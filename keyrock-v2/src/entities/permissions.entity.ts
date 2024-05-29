import { MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'permission',
})
export class Permissions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(255)
  name: string;

  @Column()
  description: string;

  @Column({
    default: false,
  })
  is_internal: boolean;

  @Column()
  @MaxLength(255)
  action: string;

  @Column()
  @MaxLength(255)
  resource: string;

  @Column()
  @MaxLength(255)
  authorization_service_header: string;

  @Column({
    default: false,
  })
  use_authorization_service_header: boolean;

  @Column()
  @MaxLength(255)
  regex_entity_ids: string;

  @Column()
  @MaxLength(255)
  regex_attributes: string;

  @Column()
  @MaxLength(255)
  regex_types: string;

  @Column({
    default: false,
  })
  is_regex: boolean;

  @Column()
  xml: string;
}
