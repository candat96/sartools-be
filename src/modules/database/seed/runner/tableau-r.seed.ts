import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauR } from '../../model/entities';
import { TableauRData } from '../data/tableau-r.data';

export default class TableauRSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauR);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauRData);
  }
}
