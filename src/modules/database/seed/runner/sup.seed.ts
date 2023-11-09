import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Sup } from '../../model/entities';
import { Sups } from '../data/sup.data';

export default class SupSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Sup);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Sups);
  }
}
