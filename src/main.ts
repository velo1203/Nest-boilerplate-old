import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 여기에서 글로벌 접두사를 설정합니다.
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
