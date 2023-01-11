import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity, } from './user.entity';
import { SourceEntity, } from './source.entity';

@Module({
imports: [TypeOrmModule.forFeature([UserEntity, SourceEntity])],
})

export class UserModule {}