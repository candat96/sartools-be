import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauQ } from '../../model/entities';
import { TableauQData } from '../data/tableau-q.data';

export default class TableauPSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauQ);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauQData);
  }
}
