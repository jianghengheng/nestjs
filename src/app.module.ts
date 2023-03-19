import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ENTITY,Controller,Service} from './entityIndex'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'JHeng1997',
      database: 'blog',
      entities:ENTITY,
      autoLoadEntities: true, // autoLoadEntities: true, // 使用这个配置自动导入entities
      synchronize: true,
    }),
    TypeOrmModule.forFeature(ENTITY),

  ],
  controllers: Controller,
  providers:Service,
})
export class AppModule { }
