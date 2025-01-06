import {type INestApplication} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

function setupSwagger(app: INestApplication) {

  const config = new DocumentBuilder()
    .setTitle('STC Store Service')
    .setDescription('The Api Service')
    .addServer('https://minhnhutpackaging.com')
    .addServer('https://minhnhutpackaging.asia')
    .addServer('http://localhost:3000')
    .build();

  const document = SwaggerModule.createDocument(app, config, {});
  SwaggerModule.setup('swagger', app, document, {
    jsonDocumentUrl: 'swagger/json',
    customSiteTitle: 'STC Store API Doc'
  });
}

export default setupSwagger;