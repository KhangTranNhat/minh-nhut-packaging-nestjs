import { applyDecorators, type Type } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiExtraModels,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiProperty,
  type ApiResponseOptions,
  ApiUnauthorizedResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import {
  ApiResponseDto,
  PaginationResponseMetaDto,
  SuccessResponseMetaDto,
} from '../../shared/dto/result';

class CustomApiResponseOptions {
  type: any;
  description?: string;
  isPaginated?: boolean;
}

export const ApiResponse = <T extends Type<any>>(
  options: CustomApiResponseOptions,
): MethodDecorator => {
  const { isPaginated = false } = options;
  return applyDecorators(
    ApiExtraModels(
      SuccessResponseMetaDto,
      PaginationResponseMetaDto,
      ApiResponseDto,
      options.type,
    ),
    ApiOkResponse({
      description: options.description || `Response for ${options.type.name}`,
      schema: {
        title: `${options.isPaginated ? 'Paginated' : 'Single'}ResponseOf${options.type.name}`,
        allOf: [
          {
            $ref: getSchemaPath(ApiResponseDto),
          },
          {
            properties: {
              meta: {
                type: 'object',
                properties: {
                  statusCode: { type: 'integer' },
                  message: { type: 'string' },
                  ...(isPaginated == true
                    ? {
                        pagination: {
                          type: 'object',
                          properties: {
                            page: { type: 'integer' },
                            pageSize: { type: 'integer' },
                            total: { type: 'integer' },
                            totalPage: { type: 'integer' },
                          },
                        },
                      }
                    : {}),
                },
              },
              response: options.isPaginated
                ? {
                    type: 'array',
                    items: { $ref: getSchemaPath(options.type) },
                  }
                : { $ref: getSchemaPath(options.type) },
            },
          },
        ],
      },
    } as ApiResponseOptions | undefined),
    ApiBadRequestResponse({
      description: options.description || `Response for ${options.type.name}`,
      schema: {
        title: `Error Response`,
        allOf: [
          {
            $ref: getSchemaPath(ApiResponseDto),
          },
          {
            properties: {
              meta: {
                type: 'object',
                properties: {
                  statusCode: { type: 'integer' },
                  error: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      message: { type: 'string' },
                    },
                  },
                },
              },
              response: null,
            },
          },
        ],
      },
    } as ApiResponseOptions | undefined),
    ApiForbiddenResponse({
      description: options.description || `Response for ${options.type.name}`,
      schema: {
        title: `Error Response`,
        allOf: [
          {
            $ref: getSchemaPath(ApiResponseDto),
          },
          {
            properties: {
              meta: {
                type: 'object',
                properties: {
                  statusCode: { type: 'integer' },
                  error: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      message: { type: 'string' },
                    },
                  },
                },
              },
              response: null,
            },
          },
        ],
      },
    } as ApiResponseOptions | undefined),
    ApiUnauthorizedResponse({
      description: options.description || `Response for ${options.type.name}`,
      schema: {
        title: `Error Response`,
        allOf: [
          {
            $ref: getSchemaPath(ApiResponseDto),
          },
          {
            properties: {
              meta: {
                type: 'object',
                properties: {
                  statusCode: { type: 'integer' },
                  error: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      message: { type: 'string' },
                    },
                  },
                },
              },
              response: null,
            },
          },
        ],
      },
    } as ApiResponseOptions | undefined),
  );
};
