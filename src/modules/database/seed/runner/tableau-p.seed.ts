import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauP } from '../../model/entities';
import { TableauPData } from '../data/tableau-p.data';

export default class TableauPSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauP);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauPData);
  }
}
