import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  login(User) {
    return;
  }

  async validateUser(username: string, password: string): Promise<any> {
    // const user = await this.userService.findOneByUserName(username);
    // if (user && user.password === md5password(password)) {
    //   return user;
    // }
    // throw new BusinessException('用户名或密码错误');
  }
}
