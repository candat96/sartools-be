import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Tableau12 } from '../../model/entities';
import { Tableau12s } from '../data/tableau1-2.data';

export default class Tableau12Seed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Tableau12);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Tableau12s);
  }
}
