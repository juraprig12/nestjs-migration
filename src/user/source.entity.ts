/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
//import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';
import { UserEntity } from './user.entity';

@Entity('source')
export class SourceEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column() comment: string;
  @Column() date: Date;
  @Column() email: string;
  //@Column() user_id: number;
  @ManyToOne(() => UserEntity, (users: UserEntity) => users.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  users: UserEntity;
}
