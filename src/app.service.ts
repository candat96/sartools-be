import { HttpStatus, Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as moment from 'moment-timezone';
import { promisify } from 'util';
import { ApiResponse } from './common/classes/api-response';
import { ApiCode } from './common/constants/api-code';
import { ErrorCode } from './common/constants/error';
import { FRANCE_TIME_ZONE } from './common/constants/timezone';
import { ApiException } from './common/exception/api-exception';
import { Config } from './config/config';

const execAsync = promisify(exec);

@Injectable()
export class AppService {
  healthCheck(): ApiResponse<string> {
    return {
      status: HttpStatus.OK,
      data: null,
      pagination: null,
      message: 'OK',
      code: ApiCode.SUCCESS,
    };
  }

  async dump(): Promise<ApiResponse<string>> {
    const dumpFilePath = `/public${
      Config.PUBLIC_FILE_UPLOAD_PATH
    }/sartools_${moment.tz(FRANCE_TIME_ZONE).toDate().getTime()}.sql`;

    const command = `docker exec -i ${
      Config.MYSQL_CONTAINER_NAME
    } mysqldump --databases ${Config.DATABASE.DATABASE_NAME} --user=${
      Config.DATABASE.DATABASE_USER
    } --password=${Config.DATABASE.DATABASE_PASSWORD} > ${process
      .cwd()
      .replace(/\\/g, '/')}${dumpFilePath}`;

    try {
      await execAsync(command);

      return {
        status: HttpStatus.OK,
        data: `${Config.SARTOOLS_HOST}${dumpFilePath}`,
        pagination: null,
        message: null,
        code: ApiCode.SUCCESS,
      };
    } catch (err) {
      console.log(err);
      throw new ApiException(
        HttpStatus.INTERNAL_SERVER_ERROR,
        ErrorCode.DUMP_DATABASE_FAILED,
      );
    }
  }
}
