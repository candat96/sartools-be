import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauBilles } from '../../model/entities';
import { TableauBillesData } from '../data/tableau-billes.data';

export default class TableauBillesSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauBilles);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauBillesData);
  }
}
