import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with graphql config based operations.
 *
 * @class
 */
@Injectable()
export class GraphqlConfigService {
  constructor(private configService: ConfigService) {}

  get debug(): boolean {
    return this.configService.get<boolean>('graphql.debug');
  }
  get playground(): boolean {
    return this.configService.get<boolean>('graphql.playground');
  }
}
