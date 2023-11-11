import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Module } from '../../model/entities';
import { Modules } from '../data/module.data';

export default class ModuleSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(Module);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Modules);
  }
}
