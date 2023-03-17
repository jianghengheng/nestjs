import { Controller, Get, Post, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/getnav')
  async getNav(@Response() res) {
    const list = await this.appService.getNav();
    res.send({
      list: list,
    });
  }
}
