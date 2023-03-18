import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  Response,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('测试模块')
@Controller('/jh')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/getnav')
  async getNav(@Param('id') id: number, @Query() query) {
    console.log(id, query);
    // let { id }: { id: number } = query;

    return await this.appService.getNav(id);
  }

  @ApiOperation({
    summary: '添加用户', // 接口描述信息
  })
  @Post('/addnav')
  addnav(@Response() res) {
    const data = this.appService.addNav();
    res.send({
      data,
    });
  }
}
