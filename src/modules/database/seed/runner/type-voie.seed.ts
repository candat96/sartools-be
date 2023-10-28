import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TypeVoie } from '../../model/entities';
import { TypeVoies } from '../data/type-voie.data';

export default class TypeVoieSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TypeVoie);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TypeVoies);
  }
}
