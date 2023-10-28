import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Temporaire } from '../../model/entities';
import { Temporaires } from '../data/temporaire.data';

export default class TemporaireSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Temporaire);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Temporaires);
  }
}
