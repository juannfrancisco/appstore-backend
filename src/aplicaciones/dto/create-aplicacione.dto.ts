import { ApiProperty } from '@nestjs/swagger';
import { SistemaOperativo } from '../entities/sistema-operativo';

export class CreateAplicacioneDto {
  @ApiProperty({ default: 'tik tok' })
  public nombre: string; // (nombre de la aplicación)
  @ApiProperty({ default: 0 })
  public precio: number; // (precio de la aplicación, puede ser 0 para aplicaciones gratuitas)
  @ApiProperty({ default: 'IOS' })
  public sistemaOperativo: SistemaOperativo; // (sistema operativo compatible: "Android", "iOS")
  @ApiProperty({ default: 0 })
  public calificacion: number; // (calificación promedio de la aplicación basada en las reseñas de los usuarios)
  @ApiProperty({ default: 10 })
  public tamano: number; // (tamaño de la aplicación en MB)
  @ApiProperty({ default: '1.0' })
  public version: string; // (versión de la aplicación)
}
