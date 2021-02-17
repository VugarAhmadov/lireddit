import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphqlConfigService } from './config.service';
import configuration from './configuration';
/**
 * Import and provide graphql configuration related classes.
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
  providers: [ConfigService, GraphqlConfigService],
  exports: [ConfigService, GraphqlConfigService],
})
export class GraphqlConfigModule {}
