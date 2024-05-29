import { Test, TestingModule } from '@nestjs/testing';
import { PtpController } from './ptp.controller';

describe('PtpController', () => {
  let controller: PtpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PtpController],
    }).compile();

    controller = module.get<PtpController>(PtpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
