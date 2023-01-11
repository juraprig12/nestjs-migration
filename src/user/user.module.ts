import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//import { UserEntity } from './user.entity';
import { UserEntity, UserEntity_1 } from './user.entity';

@Module({
//  imports: [TypeOrmModule.forFeature([UserEntity])],
imports: [TypeOrmModule.forFeature([UserEntity, UserEntity_1])],
})

export class UserModule {}