import { Test, TestingModule } from '@nestjs/testing';
import { TrustedApplicationService } from './trusted-application.service';

describe('TrustedApplicationService', () => {
  let service: TrustedApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrustedApplicationService],
    }).compile();

    service = module.get<TrustedApplicationService>(TrustedApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
