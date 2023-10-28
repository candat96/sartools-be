import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { _V154 } from '../../model/entities';
import { _V154s } from '../data/_v154.data';

export default class _V154Seed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(_V154);

    const check = await repo.count();
    if (check) return;

    await repo.insert(_V154s);
  }
}
