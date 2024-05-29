import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleAssignments } from 'src/entities/role-assignment.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(RoleAssignments)
    private roleAssignmentsRepository: Repository<RoleAssignments>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findById(id: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  createNew(newUser: User) {
    this.usersRepository.create(newUser);
  }
}
