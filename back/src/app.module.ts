import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreneauController } from './creneau/creneau.controller';
import { CreneauService } from './creneau/creneau.service';

@Module({
  imports: [],
  controllers: [AppController, CreneauController],
  providers: [AppService, CreneauService],
})
export class AppModule {}
