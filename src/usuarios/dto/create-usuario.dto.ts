import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({ default: 'jmaldonado' })
  public nombreUsuario: string; // identificador único del usuario
  @ApiProperty({ default: 'jmaldonado@gmail.com' })
  public email: string; // correo electrónico del usuario
  @ApiProperty({ default: '1234' })
  public password: string; // contraseña del usuario
}
