import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform:true
  }))
  

  app.useGlobalInterceptors(new UnauthorizedInterceptor());

  useContainer(app.select(AppModule), {fallbackOnErrors: true})
  
  await app.listen(5000);
}
bootstrap();
