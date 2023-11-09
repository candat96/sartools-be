import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauRW } from '../../model/entities';
import { TableauRWData } from '../data/tableau-rw.data';

export default class TableauRWSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauRW);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauRWData);
  }
}
