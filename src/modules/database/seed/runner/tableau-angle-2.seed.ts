import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauAngle2 } from '../../model/entities';
import { TableauAngle2s } from '../data/tableau-angle-2.data';

export default class TableauAngle2Seed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauAngle2);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauAngle2s);
  }
}
