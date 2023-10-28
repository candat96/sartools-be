import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauMark } from '../../model/entities';
import { TableauMarks } from '../data/tableau-mark.data';

export default class TableauMarkSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauMark);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauMarks);
  }
}
