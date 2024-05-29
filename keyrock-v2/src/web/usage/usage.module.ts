import { Module } from '@nestjs/common';
import { UsageController } from './usage.controller';
import { UsageService } from './usage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsagePolicy } from 'src/entities/usage-policy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsagePolicy])],
  controllers: [UsageController],
  providers: [UsageService],
})
export class UsageModule {}
