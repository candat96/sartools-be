import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './entities';

@Entity('location')
export class Location extends BaseEntity {
  @Column({ nullable: false, type: 'float' })
  latitude: number;

  @Column({ nullable: false, type: 'float' })
  longitude: number;

  @Column({ nullable: true })
  regionId: string;

  @Column({ nullable: true })
  regionName: string;

  @Column({ nullable: true })
  countryId: string;

  @Column({ nullable: true })
  countryName: string;

  @ManyToOne(() => User, (user) => user.locations)
  user: User;
}
