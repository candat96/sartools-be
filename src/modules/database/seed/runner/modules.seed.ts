import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Modules } from '../../model/entities';
import { ModulesData } from '../data/modules.data';

export default class ModuleSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Modules);

    const check = await repo.count();
    if (check) return;

    await repo.insert(ModulesData);
  }
}
