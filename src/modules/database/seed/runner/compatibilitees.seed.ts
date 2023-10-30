import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Compatibilitees } from '../../model/entities';
import { CompatibiliteesData } from '../data/compatibilitees.data';

export default class CompatibiliteesSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Compatibilitees);

    const check = await repo.count();
    if (check) return;

    await repo.insert(CompatibiliteesData);
  }
}
