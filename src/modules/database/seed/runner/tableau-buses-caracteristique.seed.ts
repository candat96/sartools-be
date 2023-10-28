import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauBusesCaracteristique } from '../../model/entities';
import { TableauBusesCaracteristiques } from '../data/tableau-buses-caracteristique.data';

export default class TableauBusesCaracteristiqueSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauBusesCaracteristique);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauBusesCaracteristiques);
  }
}
