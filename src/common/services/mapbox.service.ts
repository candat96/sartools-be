import { HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Config } from '../../config/config';
import { ErrorCode } from '../constants/error';
import { ApiException } from '../exception/api-exception';

@Injectable()
export class MapboxService {
  async reverseGeocoding(lat: number, lng: number) {
    try {
      const url = `${Config.MAPBOX_URL}/${Config.MAPBOX_ENDPOINT}/${lng},${lat}.json?access_token=${Config.MAPBOX_ACCESS_TOKEN}`;
      const response = await axios.get(url);

      return response.data;
    } catch (err) {
      console.log(err);
      throw new ApiException(
        HttpStatus.INTERNAL_SERVER_ERROR,
        ErrorCode.MAPBOX_REQUEST_FAILED,
      );
    }
  }
}
