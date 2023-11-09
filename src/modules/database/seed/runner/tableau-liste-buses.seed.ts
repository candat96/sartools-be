import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauListeBuses } from '../../model/entities';
import { TableauListeBusesData } from '../data/tableau-liste-buses.data';

export default class TableauListeBusesSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauListeBuses);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauListeBusesData);
  }
}
