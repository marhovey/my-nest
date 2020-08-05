import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticlesController } from './controllers/articles.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ArticlesController],
  providers: [AppService],
})
export class AppModule {}
