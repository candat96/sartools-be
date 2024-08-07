import { ApiResponse } from '@common/classes/api-response';
import { ApiCode } from '@common/constants/api-code';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, In, Repository } from 'typeorm';
import { ViewModuleRequest } from './dto/request';
import { Modules, User, View } from '../database/model/entities';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Modules)
    private readonly moduleRepository: Repository<Modules>,
    @InjectRepository(View)
    private readonly viewRepository: Repository<View>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getModules(): Promise<ApiResponse<Modules[]>> {
    return {
      status: HttpStatus.OK,
      data: await this.moduleRepository.find(),
      pagination: null,
      message: null,
      code: ApiCode.SUCCESS,
    };
  }

  async viewModule(userId: number, dto: ViewModuleRequest) {
    const { view } = dto;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const data = await this.viewRepository.find({
      where: {
        createdAt: Between(today, tomorrow),
        module: { name: In(view.map((item) => item.module)) },
        user: { id: userId },
      },
      relations: ['module'],
    });

    const user = await this.userRepository.findOneBy({ id: userId });
    for (const item of view) {
      const record = data.find((d) => d.module.name === item.module);
      if (record) {
        await this.viewRepository.update(record.id, {
          view: Number(record.view) + 1,
          time: Number(record.time) + item.time,
        });
      } else {
        const module = await this.moduleRepository.findOneBy({
          name: item.module,
        });
        await this.viewRepository.save(
          this.viewRepository.create({
            user,
            module,
            view: 1,
            time: item.time,
          }),
        );
      }
    }

    return {
      status: HttpStatus.OK,
      data: null,
      pagination: null,
      message: 'Success',
      code: ApiCode.SUCCESS,
    };
  }
}
