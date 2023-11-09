import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Primaire } from '../../model/entities';
import { Primaires } from '../data/primaire.data';

export default class PrimaireSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Primaire);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Primaires);
  }
}
