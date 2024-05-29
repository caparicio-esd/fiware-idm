import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from 'src/entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleUsagePolicy } from 'src/entities/role-usage-policy.entity';
import { RolePermissions } from 'src/entities/role-permissions.entity';
import { RoleAssignments } from 'src/entities/role-assignment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Role,
      RoleUsagePolicy,
      RolePermissions,
      RoleAssignments,
    ]),
  ],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
