/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
//import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column() username: string;
  @Column() password: string;
  @Column() ip: string;
  @Column() phone: number;
  // @OneToMany(() => UserEntity_1, (source: UserEntity_1) => source.user_id, {
  //   onUpdate: 'CASCADE',
  //   onDelete: 'CASCADE',
  // })
  // source: Array<UserEntity_1>
 };

//  @Entity('source')
//  export class UserEntity_1 {
//    @PrimaryGeneratedColumn() id: number;
//    @Column() link: string;
//    @Column() comment: string;
//    @Column() date: Date;
//    @Column() phone: number;
//    //@Column() user_id: number;
//    @ManyToOne(() => UserEntity, (users: UserEntity) => users.id, {
//     onUpdate: 'CASCADE',
//     onDelete: 'CASCADE',
//   })
//   users: UserEntity
// }
 
// enum Gender {
//   MALE,
//   FEMALE,
// };

// @Entity({database: 'users'})
// export class UserEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   email: string;
  
//   @Column('enum', { enum: Gender })
//   gender: Gender;
// };