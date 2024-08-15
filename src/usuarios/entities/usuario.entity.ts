import { ApiProperty } from '@nestjs/swagger';
import { Aplicacion } from 'src/aplicaciones/entities/aplicacione.entity';

export class Usuario {
  @ApiProperty({ default: 'jmaldonado' })
  public nombreUsuario: string; // identificador único del usuario
  @ApiProperty({ default: 'jmaldonado@gmail.com' })
  public email: string; // correo electrónico del usuario
  @ApiProperty({ default: '1234' })
  public password: string; // contraseña del usuario
  @ApiProperty()
  public aplicacionesDescargadas: Aplicacion[]; // lista de aplicaciones descargadas por el usuario
}
