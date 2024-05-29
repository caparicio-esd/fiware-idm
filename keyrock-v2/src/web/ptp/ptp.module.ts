import { Module } from '@nestjs/common';
import { PtpService } from './ptp.service';
import { PtpController } from './ptp.controller';
import { Ptp } from 'src/entities/ptp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ptp])],
  providers: [PtpService],
  controllers: [PtpController],
})
export class PtpModule {}
