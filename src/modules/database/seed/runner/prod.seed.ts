import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Prod } from '../../model/entities';
import { Prods } from '../data/prod.data';

export default class ProdSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Prod);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Prods);
  }
}
