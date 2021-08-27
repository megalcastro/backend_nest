import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Api dummy building')
    .setDescription('This document for Api')
    .setVersion('1.0')
    .addTag('example')
    .setContact('Luis David','wwww.nestJS.com','luisd.ing.pro@gmail.com')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  //app.enableShutdownHooks();
  await app.listen(3000);
}
bootstrap();
