import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AplicacionesModule } from './aplicaciones/aplicaciones.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [AplicacionesModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
