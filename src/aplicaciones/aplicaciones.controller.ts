import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Query,
} from '@nestjs/common';
import { AplicacionesService } from './aplicaciones.service';
import { CreateAplicacioneDto } from './dto/create-aplicacione.dto';
import { UpdateAplicacioneDto } from './dto/update-aplicacione.dto';
import { Response } from 'express';
import { SistemaOperativo } from './entities/sistema-operativo';
import { ApiQuery } from '@nestjs/swagger';

@Controller('aplicaciones')
export class AplicacionesController {
  constructor(private readonly aplicacionesService: AplicacionesService) {}

  @Post()
  create(@Body() createAplicacioneDto: CreateAplicacioneDto) {
    return this.aplicacionesService.create(createAplicacioneDto);
  }

  @ApiQuery({ name: 'nombre', required: false })
  @ApiQuery({ name: 'os', enum: SistemaOperativo, required: false })
  @Get()
  findAll(@Query('nombre') nombre: string, @Query('os') os: string) {
    return this.aplicacionesService.findAll(nombre, os);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    const resultado = this.aplicacionesService.findOne(+id);
    if (resultado) {
      res.status(200).send(resultado);
    } else {
      res.status(404).send({ error: 'la aplicacion no existe' });
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAplicacioneDto: UpdateAplicacioneDto,
  ) {
    return this.aplicacionesService.update(+id, updateAplicacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aplicacionesService.remove(+id);
  }
}
