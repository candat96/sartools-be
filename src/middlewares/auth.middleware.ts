import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ErrorCode } from '../common/constants/error';
import { ApiException } from '../common/exception/api-exception';
import { Config } from '../config/config';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(readonly jwtService: JwtService) {}

  async use(req: any, res: any, next: (error?: any) => void) {
    const bear: string = req.headers['authorization'] || '';
    const token: string = bear.replace(/Bearer /gi, '');

    try {
      const auth: any = this.jwtService.verify(token, {
        secret: Config.JWT_SECRET,
      });
      if (!auth.id) {
        throw new ApiException(
          HttpStatus.UNAUTHORIZED,
          ErrorCode.INVALID_ACCESS_TOKEN,
        );
      }

      req.auth = auth;
      next();
    } catch (e) {
      throw new ApiException(
        HttpStatus.UNAUTHORIZED,
        ErrorCode.INVALID_ACCESS_TOKEN,
      );
    }
  }
}
