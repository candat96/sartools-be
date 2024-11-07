import { ApiCode } from '@common/constants/api-code';
import { ConstantService } from '@modules/constant/constant.service';
import {
  Controller,
  Get,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Constant')
@Controller('constant')
export class ConstantController {
  constructor(private readonly constantService: ConstantService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all constant',
    description: 'Get all constant',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse()
  async getAllConstant() {
    try {
      return {
        status: HttpStatus.OK,
        data: await this.constantService.getAll(),
        pagination: null,
        message: null,
        code: ApiCode.SUCCESS,
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
