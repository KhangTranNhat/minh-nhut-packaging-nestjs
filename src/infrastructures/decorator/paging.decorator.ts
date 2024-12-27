import { SetMetadata } from '@nestjs/common';

export const PAGINATION_RESPONSE_METADATA = 'paginationResponse';

export const PaginationResponse = () => SetMetadata(PAGINATION_RESPONSE_METADATA, true);