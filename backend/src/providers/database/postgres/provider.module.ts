import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';
import { PostgresConfigModule } from 'src/config/database/postgres/config.module';
import { PostgresConfigService } from 'src/config/database/postgres/config.service';

import { User } from 'src/modules/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      inject: [PostgresConfigService],
      useFactory: async (postgresConfigService: PostgresConfigService) => ({
        type: 'postgres' as DatabaseType,
        host: postgresConfigService.host,
        port: postgresConfigService.port,
        username: postgresConfigService.username,
        password: postgresConfigService.password,
        database: postgresConfigService.database,
        synchronize: true,
        logging: true, // check if node_env is development
        entities: [User],
      }),
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresDatabaseProviderModule {}
