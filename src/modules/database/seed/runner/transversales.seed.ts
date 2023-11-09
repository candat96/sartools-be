import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Transversales } from '../../model/entities';
import { TransversalesData } from '../data/transversales.data';

export default class TransversalesSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Transversales);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TransversalesData);
  }
}
