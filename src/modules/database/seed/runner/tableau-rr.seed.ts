import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauRR } from '../../model/entities';
import { TableauRRData } from '../data/tableau-rr.data';

export default class TableauRRSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauRR);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauRRData);
  }
}
