import { Injectable } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class LoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'MM/DD/YYYY, h:mm:ss A',
        }),
        winston.format.printf(({ timestamp, level, message }) => {
          return `[${level.toLocaleUpperCase()}] ${timestamp}: ${message}`;
        }),
      ),
      transports: [
        new winston.transports.Console({
          level: 'info',
        }),
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
        }),
        new winston.transports.File({
          filename: 'logs/combined.log',
        }),
      ],
    });
  }

  info(message: any) {
    this.logger.info(message);
  }

  debug(message: any) {
    this.logger.debug(message);
  }

  error(error: any) {
    this.logger.error(error?.message, error?.stack);
  }

  warn(message: any) {
    this.logger.warn(message);
  }
}
