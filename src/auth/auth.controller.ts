import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/entity/user.entity';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@ApiTags('权限模块')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async login(@Body() User) {
    try {
      return await this.authService.login(User);
    } catch (error) {
      throw {
        code: 500,
        msg: '登录失败',
      };
    }
  }
}
