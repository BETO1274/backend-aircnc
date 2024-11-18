/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import { ValidationPipe } from '@nestjs/common';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Convierte parámetros a sus tipos esperados
    whitelist: true, // Filtra propiedades no definidas en el DTO
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
