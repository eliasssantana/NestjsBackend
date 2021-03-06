import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { of } from 'rxjs';
import { map, mergeMap, takeWhile, tap } from 'rxjs/operators';
import { UsersService } from '../users/users.service';
import { UserFromJwt } from './model/UserFromJwt';
import { AuthRequest } from './model/AuthRequest';
import { IS_PUBLIC_KEY } from './public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const canActivate = super.canActivate(context);

    if (typeof canActivate === 'boolean') {
      return canActivate;
    }

    return of(canActivate).pipe(
      mergeMap((value) => value),
      takeWhile((value) => value),
      map(() => context.switchToHttp().getRequest<AuthRequest>()),
      mergeMap((request) =>
        of(request).pipe(
          map((req) => {
            if (!req.principal) {
              throw Error('User was not found in request.');
            }

            return req.principal;
          }),
          mergeMap((userFromJwt: UserFromJwt) =>
            this.usersService.findOne(userFromJwt.id),
          ),
          tap(user => {
            request.principal = user;
          }),
        ),
      ),
      map((user) => Boolean(user)),
    );
  }
}
