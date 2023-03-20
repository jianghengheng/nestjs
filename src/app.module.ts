import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENTITY, Controller, Service } from './entityIndex';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'jh',
      entities: ENTITY,
      autoLoadEntities: true, // autoLoadEntities: true, // 使用这个配置自动导入entities
      synchronize: true,
    }),
    TypeOrmModule.forFeature(ENTITY),
    AuthModule,
  ],
  controllers: Controller,
  providers: Service,
})
export class AppModule {}
