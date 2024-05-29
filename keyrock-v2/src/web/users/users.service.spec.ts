import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('user should be created', () => {
    const newUser = new User();
    newUser.username = 'newuser';
    newUser.description = 'description';
    newUser.website = 'newuser.com';
    newUser.image = 'none';
    newUser.gravatar = true;
    newUser.email = 'info@newuser.com';
    newUser.enabled = true;
    newUser.admin = true;
    newUser.starters_tour_ended = false;
    newUser.eidas_id = '';
    newUser.extra = JSON.stringify({});
    newUser.scope = 'hola';

    service.createNew(newUser);
  });
});
