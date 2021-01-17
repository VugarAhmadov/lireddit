import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Lireddit API')
    .setDescription('The Lireddit API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const appConfig: AppConfigService = app.get('AppConfigService');
  await app.listen(appConfig.port, appConfig.hostname, () =>
    Logger.log(`Server running on: ${appConfig.url}`, 'Bootstrap'),
  );
}
bootstrap();
