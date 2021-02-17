import { Module } from '@nestjs/common';

// Config Modules
import { AppConfigModule } from './config/app/config.module';
import { PostgresConfigModule } from './config/database/postgres/config.module';
import { GraphqlConfigModule } from './config/graphql/config.module';

// Providers Modules
import { PostgresDatabaseProviderModule } from './providers/database/postgres/provider.module';
import { GraphqlProviderModule } from './providers/graphql/provider.module';

// Application Modules
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    AppConfigModule,
    PostgresConfigModule,
    GraphqlConfigModule,
    PostgresDatabaseProviderModule,
    GraphqlProviderModule,
    UserModule,
  ],
})
export class AppModule {}
