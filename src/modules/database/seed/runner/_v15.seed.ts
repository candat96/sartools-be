import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { _V15 } from '../../model/entities';
import { _V15Data } from '../data/_v15.data';

export default class _V15Seed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(_V15);

    const check = await repo.count();
    if (check) return;

    await repo.insert(_V15Data);
  }
}
