import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly User: Repository<User>,
    ) { }
    async getUser(id: number) {
        return await this.User.findBy({ id });
        // this.nav.findBy({id:})
        // return await this.nav.findBy({ id });
    }
    creatUser() {

        return this.User.insert({
            name: 'jj',
            age: 28,
            sex: '男',
            paw: "123456"
        })
    }

}
