import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Mod } from '../../model/entities';
import { Mods } from '../data/mod.data';

export default class ModSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Mod);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Mods);
  }
}
