import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsuarioToken } from './model/UsuarioToken';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(email: string, senha: string): Promise<UsuarioToken>;
    private validateUser;
}
