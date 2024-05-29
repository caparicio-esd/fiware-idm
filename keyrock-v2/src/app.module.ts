import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './web/users/users.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { UsageModule } from './web/usage/usage.module';
import { TrustedApplicationModule } from './web/trusted-application/trusted-application.module';
import { RoleModule } from './web/role/role.module';
import { PtpModule } from './web/ptp/ptp.module';
import { PermissionsModule } from './web/permissions/permissions.module';
import { PepProxy } from './entities/pep-proxy.entity';
import { Organization } from './entities/organization.entity';
import { IoT } from './entities/iot.entity';
import { EidasCredentials } from './entities/eidas-credentials.entity';
import { DelegationEvidence } from './entities/delegation-evidence.entity';
import { AuthzForce } from './entities/authzforce.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sqlite',
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
      autoLoadEntities: true,
      entities: [
        PepProxy,
        Organization,
        IoT,
        EidasCredentials,
        DelegationEvidence,
        AuthzForce,
      ],
    }),
    UsersModule,
    UsageModule,
    TrustedApplicationModule,
    RoleModule,
    PtpModule,
    PermissionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
