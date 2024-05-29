import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRegistrationProfile } from 'src/entities/user-registration-profile.entity';
import { UserOrganization } from 'src/entities/user-organization.entity';
import { UserAuthorizedApplication } from 'src/entities/user-authorized-application.entity';
import { RoleAssignments } from 'src/entities/role-assignment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserRegistrationProfile,
      UserOrganization,
      UserAuthorizedApplication,
      RoleAssignments,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
