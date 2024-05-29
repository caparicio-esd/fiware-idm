import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }
  @Get(':id')
  async findById(@Param() id: string): Promise<User> {
    return await this.usersService.findById(id);
  }
}
