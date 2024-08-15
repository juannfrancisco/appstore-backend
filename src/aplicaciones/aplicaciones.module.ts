import { Module } from '@nestjs/common';
import { AplicacionesService } from './aplicaciones.service';
import { AplicacionesController } from './aplicaciones.controller';

@Module({
  controllers: [AplicacionesController],
  providers: [AplicacionesService],
  exports: [AplicacionesService],
})
export class AplicacionesModule {}
