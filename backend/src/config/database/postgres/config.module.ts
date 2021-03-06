import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostgresConfigService } from './config.service';
import configuration from './configuration';
/**
 * Import and provide Postgres Database configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
      expandVariables: true,
      load: [configuration],
    }),
  ],
  providers: [ConfigService, PostgresConfigService],
  exports: [ConfigService, PostgresConfigService],
})
export class PostgresConfigModule {}
