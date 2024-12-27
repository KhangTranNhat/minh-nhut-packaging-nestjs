import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { LoggerService } from "@Infrastructures/service/logger";


interface IError {
  message: string;
  code_error: string;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const reply = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest();
    const exceptionResponse = exception.getResponse() as
      | {
      statusCode: number;
      error: string;
      code: string;
      message: string;
    }
      | string;

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const code = typeof exceptionResponse === 'object' && 'code' in exceptionResponse ? exceptionResponse.code : 'UNKNOWN_ERROR';
    const message = typeof exceptionResponse === 'object' && 'message' in exceptionResponse ? exceptionResponse.message : exception.message;

    this.logMessage(request, { message, code_error: code }, status, exception);

    // Send the response using Fastify API
    return reply.status(status).send({
      data: null,
      meta: {
        statusCode: status,
        error: {
          code,
          message,
        },
      },
    });
  }

  private logMessage(request: any, message: IError, status: number, exception: any) {
    if (status === 500) {
      this.logger.error(
        `End Request on ${request.url}`,
        `method=${request.method} status=${status} code=${message.code_error || null} message=${message.message || null}`,
        status >= 500 ? exception.stack : '',
      );
    } else {
      this.logger.warn(
        `End Request on ${request.url}`,
        `method=${request.method} status=${status} code=${message.code_error || null} message=${message.message || null}`,
      );
    }
  }
}
