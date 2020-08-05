import { Controller, Get, Param } from '@nestjs/common';
import { ParamsDictionary } from 'express-serve-static-core';

@Controller('articles')
export class ArticlesController {
  @Get()
  findAll(): string {
    return '......'
  }

  @Get('/:gbId')
  getUser(@Param() param: ParamsDictionary): string {
    return param.gbId
  }
}