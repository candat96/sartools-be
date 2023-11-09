import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { ProduitsType } from '../../model/entities';
import { ProduitsTypes } from '../data/produits-type.data';

export default class ProduitsTypeSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(ProduitsType);

    const check = await repo.count();
    if (check) return;

    await repo.insert(ProduitsTypes);
  }
}
