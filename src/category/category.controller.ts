
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

import { CategoryService } from './category.service'
@Controller('/category')
@ApiTags('分类模块')

export class CategoryController {
    constructor(
        private readonly CategoryService: CategoryService
        
        ) { }
    @ApiQuery({
        name: 'id',
        description: '这是需要传递的参数',
    })
    @Get('/getCategory')
    async getCategory(  @Query() query: { id: number }) {
        console.log(query);
        let { id }: { id: number } = query
   

        return  await this.CategoryService.getCategory(id)
        //  this.CategoryService.
    }
    @Post('/creat')
    creatCategory(){
        return this.CategoryService.creatCategory()
    }
}
