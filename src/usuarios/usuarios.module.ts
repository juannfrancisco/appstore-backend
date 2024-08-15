import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { AplicacionesModule } from 'src/aplicaciones/aplicaciones.module';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [AplicacionesModule],
})
export class UsuariosModule {}
