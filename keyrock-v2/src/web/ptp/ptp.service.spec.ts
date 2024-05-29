import { Test, TestingModule } from '@nestjs/testing';
import { PtpService } from './ptp.service';

describe('PtpService', () => {
  let service: PtpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PtpService],
    }).compile();

    service = module.get<PtpService>(PtpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
