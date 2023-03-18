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
  async getNav(id: number) {
    // this.nav.findBy({id:})
    return await this.nav.findBy({ id });
  }
  addNav() {
    let nav = new Nav();
    nav.title = '你爸爸';
    return this.nav.insert(nav);
  }
}
