/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './infrastructure/nestjs/user.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmUserEntity } from './infrastructure/typeorm/typeormuserentity';


@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-us-west-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.ffenhqwkmshxesotaasr',
      password: 'MasterKey2020**',
      database: 'postgres',
      entities: [TypeOrmUserEntity],
     
      })],
 
})
export class AppModule { }
