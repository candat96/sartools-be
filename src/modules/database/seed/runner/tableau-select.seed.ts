import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauSelect } from '../../model/entities';
import { TableauSelects } from '../data/tableau-select.data';

export default class TableauSelectSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauSelect);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauSelects);
  }
}
