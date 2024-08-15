import { Test, TestingModule } from '@nestjs/testing';
import { AplicacionesController } from './aplicaciones.controller';
import { AplicacionesService } from './aplicaciones.service';

describe('AplicacionesController', () => {
  let controller: AplicacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AplicacionesController],
      providers: [AplicacionesService],
    }).compile();

    controller = module.get<AplicacionesController>(AplicacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
