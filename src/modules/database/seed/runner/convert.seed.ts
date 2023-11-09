import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Convert } from '../../model/entities';
import { Converts } from '../data/convert.data';

export default class SupSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Convert);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Converts);
  }
}
