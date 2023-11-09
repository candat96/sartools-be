import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Longitudinales } from '../../model/entities';
import { LongitudinalesData } from '../data/longitudinales.data';

export default class LongitudinalesSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Longitudinales);

    const check = await repo.count();
    if (check) return;

    await repo.insert(LongitudinalesData);
  }
}
