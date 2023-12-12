import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptographyUtil } from './utils/cryptography.util';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CryptographyUtil],
})
export class AppModule {}
