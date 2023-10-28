import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Tableau11 } from '../../model/entities';
import { Tableau11s } from '../data/tableau1-1.data';

export default class Tableau12Seed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Tableau11);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Tableau11s);
  }
}
