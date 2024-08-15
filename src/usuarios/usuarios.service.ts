import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  usuarios: Usuario[] = [];
  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario: Usuario = new Usuario();
    usuario.nombreUsuario = createUsuarioDto.nombreUsuario;
    usuario.email = createUsuarioDto.email;
    usuario.password = createUsuarioDto.password;
    usuario.aplicacionesDescargadas = [];
    this.usuarios.push(usuario);
    return usuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(nombreUsuario: string) {
    return this.usuarios.find(
      (usuario) => usuario.nombreUsuario == nombreUsuario,
    );
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
