import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nav } from './entity/nav.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'jh',
      autoLoadEntities: true, // autoLoadEntities: true, // 使用这个配置自动导入entities
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Nav]),
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
