import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Voie } from '../../model/entities';
import { Voies } from '../data/voie.data';

export default class VoieSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Voie);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Voies);
  }
}
