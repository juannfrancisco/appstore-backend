import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AplicacionesService } from 'src/aplicaciones/aplicaciones.service';
import { Response } from 'express';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly aplicacionesService: AplicacionesService,
  ) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }

  @Post(':nombreUsuario/aplicaciones/:idAplicacion')
  descargarAplicacion(
    @Param('nombreUsuario') nombreUsuario: string,
    @Param('idAplicacion') idAplicacion: string,
    @Res() res: Response,
  ) {
    const aplicacion = this.aplicacionesService.findOne(+idAplicacion);
    const usuario = this.usuariosService.findOne(nombreUsuario);
    if (!aplicacion) {
      res.status(404).send({ mensaje: 'La app no existe' });
    }
    usuario.aplicacionesDescargadas.push(aplicacion);
    aplicacion.descargas = aplicacion.descargas + 1;
    res.status(200).send(aplicacion);
  }
}
