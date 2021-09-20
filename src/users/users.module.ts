import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { IsCpfValidConstraint } from './isCPFvalid.validator';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaModule, IsCpfValidConstraint],
  exports: [UsersService]
})
export class UsersModule {}
