import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity'

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly category: Repository<Category>,
    ) { }
    async getCategory(id: number) {
        return await this.category.findBy({ id });
        // this.nav.findBy({id:})
        // return await this.nav.findBy({ id });
    }
    creatCategory() {

        return this.category.insert({
            category: '生活类',
            num: 0
        })
    }

}
