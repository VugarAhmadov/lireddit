import { Module } from '@nestjs/common';

// Config Modules
import { AppConfigModule } from './config/app/config.module';
import { PostgresConfigModule } from './config/database/postgres/config.module';

// Providers Modules
import { PostgresDatabaseProviderModule } from './providers/database/postgres/provider.module';

// Application Modules
import { IdeaModule } from './modules/idea/idea.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AppConfigModule,
    PostgresConfigModule,
    PostgresDatabaseProviderModule,
    IdeaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
