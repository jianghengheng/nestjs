import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nav } from './entity/nav.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Nav)
    private readonly nav: Repository<Nav>,
  ) {}
  async getNav() {
    return await this.nav.find();
  }
}
