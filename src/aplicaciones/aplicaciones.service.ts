import { Injectable } from '@nestjs/common';
import { CreateAplicacioneDto } from './dto/create-aplicacione.dto';
import { UpdateAplicacioneDto } from './dto/update-aplicacione.dto';
import { Aplicacion } from './entities/aplicacione.entity';

@Injectable()
export class AplicacionesService {
  aplicaciones: Aplicacion[] = [];
  create(createAplicacioneDto: CreateAplicacioneDto) {
    const app: Aplicacion = new Aplicacion();
    app.id = this.aplicaciones.length + 1;
    app.nombre = createAplicacioneDto.nombre;
    app.precio = createAplicacioneDto.precio;
    app.descargas = 0;
    app.calificacion = 0;
    app.version = createAplicacioneDto.version;
    app.sistemaOperativo = createAplicacioneDto.sistemaOperativo;
    this.aplicaciones.push(app);
    return app;
  }

  findAll(nombre: string, os: string) {
    let aplicacionesFilter: Aplicacion[] = [];
    if (!nombre && !os) {
      return this.aplicaciones;
    }

    if (nombre && os) {
      aplicacionesFilter = this.aplicaciones.filter(
        (a: Aplicacion) =>
          a.nombre.includes(nombre) && a.sistemaOperativo == os,
      );
    } else {
      if (nombre) {
        aplicacionesFilter = this.aplicaciones.filter((a: Aplicacion) =>
          a.nombre.includes(nombre),
        );
      }
      if (os) {
        aplicacionesFilter = this.aplicaciones.filter(
          (a: Aplicacion) => a.sistemaOperativo == os,
        );
      }
    }
    return aplicacionesFilter;
  }

  findOne(id: number) {
    const result = this.aplicaciones.find(
      (element: Aplicacion) => element.id == id,
    );
    return result;
  }

  update(id: number, updateAplicacioneDto: UpdateAplicacioneDto) {
    return `This action updates a #${id} aplicacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} aplicacione`;
  }
}
