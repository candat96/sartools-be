import { HttpStatus } from '@nestjs/common';

export const whitelistHTTPStatusCase = [
  HttpStatus.INTERNAL_SERVER_ERROR,
  HttpStatus.BAD_REQUEST,
];
