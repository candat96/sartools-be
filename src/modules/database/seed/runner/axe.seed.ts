import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Axe } from '../../model/entities';
import { Axes } from '../data/axe.data';

export default class AxeSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Axe);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Axes);
  }
}
