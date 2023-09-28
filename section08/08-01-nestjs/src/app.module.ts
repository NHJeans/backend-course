import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService], // AppController에서 AppService를 사용하기 위해 추가()
})
export class AppModule {}
