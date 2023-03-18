
import {
    Controller,
    Get,
    Param,
    Post,
    Query,
    Request,
    Response,
} from '@nestjs/common';

import { ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';

import { UserService } from './user.service'
@Controller('/User')
@ApiTags('用户模块')

export class UserController {
    constructor(
        private readonly UserService: UserService
        
        ) { }
    @ApiQuery({
        name: 'id',
        description: '这是需要传递的参数',
    })
    @Get('/getUser')
    async getUser(  @Query() query: { id: number }) {
        console.log(query);
        let { id }: { id: number } = query
   

        return  await this.UserService.getUser(id)
        //  this.UserService.
    }
    @Post('/creat')
    creatUser(){
        return this.UserService.creatUser()
    }
}
