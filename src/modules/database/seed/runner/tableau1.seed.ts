import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Tableau1 } from '../../model/entities';
import { Tableau1Data } from '../data/tableau1.data';

export default class Tableau1Seed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Tableau1);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Tableau1Data);
  }
}
