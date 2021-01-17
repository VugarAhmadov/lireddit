import { Module } from '@nestjs/common';

// Modules
import { AppConfigModule } from './config/app/config.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
