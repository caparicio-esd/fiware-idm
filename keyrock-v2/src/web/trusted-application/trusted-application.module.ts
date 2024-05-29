import { Module } from '@nestjs/common';
import { TrustedApplicationController } from './trusted-application.controller';
import { TrustedApplicationService } from './trusted-application.service';
import { TrustedApplication } from 'src/entities/trusted-application.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TrustedApplication])],
  controllers: [TrustedApplicationController],
  providers: [TrustedApplicationService],
})
export class TrustedApplicationModule {}
