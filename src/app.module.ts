import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryService } from './category/category.service';

import { CategoryController } from './category/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nav } from './entity/nav.entity';
import { Category } from './entity/category.entity';
import { User } from './entity/user.entity';
import { UserController } from './users/use.controller';
import { UserService } from './users/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'JHeng1997',
      database: 'blog',
      autoLoadEntities: true, // autoLoadEntities: true, // 使用这个配置自动导入entities
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Nav, Category, User]),

  ],
  controllers: [AppController, CategoryController, UserController],
  providers: [AppService, CategoryService, UserService],
})
export class AppModule { }
