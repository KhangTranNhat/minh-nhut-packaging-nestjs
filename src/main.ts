import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { LoggerService } from "@Infrastructures/service/logger";
import { BadRequestException, HttpExceptionFilter } from "@Infrastructures/exception";
import { RequestMethod, ValidationPipe } from "@nestjs/common";
import {ValidationError} from "class-validator";
import setupSwagger from "@Infrastructures/util/swagger.util";
import { LoggerInterceptor } from "@Infrastructures/interceptor";
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )



  const isDevelopment = process.env.NODE_ENV === 'development';
  const port = process.env.APP_PORT;
  const apiPrefix = process.env.API_PREFIX;
  const corsOrigin = process.env.APP_CORS_ORIGIN;

  // Setup security headers
  app.use(helmet());

  //cookie
  app.use(cookieParser());



  // Use global validation pipe for DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const extractMessages = (errors: ValidationError[]): string[] => {
          const messages: string[] = [];
          errors.forEach(error => {
            if (error.constraints) {
              messages.push(...Object.values(error.constraints));
            }
            if (error.children && error.children.length > 0) {
              messages.push(...extractMessages(error.children));
            }
          });
          return messages;
        };

        const messages = extractMessages(validationErrors);

        return new BadRequestException(
          'V000',
          messages,
        );
      },
    }),
  );
  // Filter
  app.useGlobalFilters(new HttpExceptionFilter(app.get(LoggerService)));

  //cors
  app.enableCors({
    origin: corsOrigin,
    methods: 'FIND,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Set a global API prefix
  app.setGlobalPrefix(apiPrefix, {

  });

  // swagger
  if (isDevelopment) {
    setupSwagger(app);
  }

  // interceptors
  app.useGlobalInterceptors(new LoggerInterceptor(new LoggerService()));

  await app.listen(port, () => {
    console.info(`Server starting on port ${port}`);
  });
}
bootstrap();
