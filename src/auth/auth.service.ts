import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService} from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from 'src/errors/unauthorized.error';
import { JwtService } from '@nestjs/jwt';
import { UsuarioToken } from './model/UsuarioToken';
import { UsuarioPayload } from './model/UsuarioPayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, senha: string): Promise<UsuarioToken> {
    const usuario: User = await this.validateUser(email, senha);

    const payload: UsuarioPayload = {
      username: usuario.email,
      sub: usuario.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateUser(email: string, senha: string) {
    const usuario = await this.userService.findByEmail(email);
    console.log(usuario)
    if (usuario) {
      const isPasswordValid = await bcrypt.compare(senha, usuario.senha);
      console.log(usuario.senha)
      console.log(senha)
      console.log(isPasswordValid)
      if (isPasswordValid) {
        console.log("I am here")
        return {
          ...usuario,
          senha: undefined,
        };
      }
    }

    throw new UnauthorizedError('E-mail e/ou senha fornecidos são incorretos.');
  }
}
