import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { User } from '../../model/entities';
import { Users } from '../data/user.data';

export default class UserSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(User);

    const check = await repo.count();
    if (check) return;

    await repo.insert(Users);
  }
}
