import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get env(): string {
    return this.configService.get<string>('app.env');
  }
  get port(): number {
    return Number(this.configService.get<number>('app.port'));
  }
  get hostname(): string {
    return this.configService.get<string>('app.hostname');
  }
  get name(): string {
    return this.configService.get<string>('app.name');
  }
  get url(): string {
    return this.configService.get<string>('app.url');
  }
}
