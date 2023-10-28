import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauS } from '../../model/entities';
import { TableauSData } from '../data/tableau-s.data';

export default class TableauSSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauS);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauSData);
  }
}
