import { IsIn, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'eidas_credentials',
})
export class EidasCredentials {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(255)
  support_contact_person_name: string;

  @Column()
  @MaxLength(255)
  support_contact_person_surname: string;

  @Column()
  @MaxLength(255)
  support_contact_person_email: string;

  @Column()
  @MaxLength(255)
  support_contact_person_telephone_number: string;

  @Column()
  @MaxLength(255)
  support_contact_person_company: string;

  @Column()
  @MaxLength(255)
  technical_contact_person_name: string;

  @Column()
  @MaxLength(255)
  technical_contact_person_surname: string;

  @Column()
  @MaxLength(255)
  technical_contact_person_email: string;

  @Column()
  @MaxLength(255)
  technical_contact_person_telephone_number: string;

  @Column()
  @MaxLength(255)
  technical_contact_person_company: string;

  @Column()
  @MaxLength(255)
  organization_name: string;

  @Column()
  @MaxLength(255)
  organization_url: string;

  @Column()
  organization_nif: string;

  @Column()
  @IsIn(['public', 'private'])
  sp_type: string;

  @Column('json')
  attributes_list: string;

  get attribute_list(): string {
    const default_json = {
      NaturalPerson: [
        'PersonIdentifier',
        'FamilyName',
        'FirstName',
        'DateOfBirth',
      ],
      LegalPerson: [],
      RepresentativeNaturalPerson: [],
    };
    const attributes_list_keys = this.attributes_list
      ? Object.keys(this.attributes_list).length
      : 0;
    return attributes_list_keys > 0
      ? JSON.stringify(this.attributes_list)
      : JSON.stringify(default_json);
  }
}
