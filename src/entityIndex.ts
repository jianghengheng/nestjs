import { Category } from "./category/entity/category.entity";
import { Nav } from "./entity/nav.entity";
import { User } from "./users/entity/user.entity";
import { CategoryController } from "./category/category.controller";
import { CategoryService } from "./category/category.service";
import { UserController } from "./users/use.controller";
import { UserService } from "./users/user.service";
import {AppService} from './app.service'
import { AppController } from "./app.controller";

export const ENTITY = [Category, Nav, User]
export const Controller = [CategoryController, UserController,AppController]
export const Service = [UserService, CategoryService, AppService]