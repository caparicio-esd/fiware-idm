import { Test, TestingModule } from '@nestjs/testing';
import { TrustedApplicationController } from './trusted-application.controller';

describe('TrustedApplicationController', () => {
  let controller: TrustedApplicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrustedApplicationController],
    }).compile();

    controller = module.get<TrustedApplicationController>(TrustedApplicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
