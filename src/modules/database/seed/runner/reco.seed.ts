import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Reco } from '../../model/entities';
import { Recos } from '../data/reco.data';

export default class RecoSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Reco);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Recos);
  }
}
