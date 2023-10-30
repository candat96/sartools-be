import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { TableauMesh } from '../../model/entities';
import { TableauMeshes } from '../data/tableau-mesh.data';

export default class TableauMeshSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(TableauMesh);

    const check = await repo.count();
    if (check) return;

    await repo.insert(TableauMeshes);
  }
}
