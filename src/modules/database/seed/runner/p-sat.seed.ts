import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { PSat } from '../../model/entities';
import { PSats } from '../data/p-sat.data';

export default class PSat5Seed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(PSat);

    const check = await repo.count();
    if (check) return;

    await repo.insert(PSats);
  }
}
