import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Topo } from '../../model/entities';
import { Topos } from '../data/toto.data';

export default class TopoSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Topo);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Topos);
  }
}
