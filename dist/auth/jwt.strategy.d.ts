import { Strategy } from 'passport-jwt';
import { UserFromJwt } from './model/UserFromJwt';
import { UsuarioPayload } from './model/UsuarioPayload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: UsuarioPayload): Promise<UserFromJwt>;
}
export {};
