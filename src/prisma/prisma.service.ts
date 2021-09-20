import { PrismaClient } from '.prisma/client';
import { Injectable, OnModuleInit, INestApplication, Global } from '@nestjs/common';

// @Global()
@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit {

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });    
  }
}
