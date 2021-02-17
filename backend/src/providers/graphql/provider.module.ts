import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GraphqlConfigModule } from 'src/config/graphql/config.module';
import { GraphqlConfigService } from 'src/config/graphql/config.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [GraphqlConfigModule],
      inject: [GraphqlConfigService],
      useFactory: async (graphqlConfigService: GraphqlConfigService) => ({
        debug: graphqlConfigService.debug,
        playground: graphqlConfigService.playground,
        typePaths: ['./**/*.graphql'],
        definitions: {
          path: join(process.cwd(), 'src/graphql.classes.ts'),
          outputAs: 'class',
        },
      }),
    }),
  ],
})
export class GraphqlProviderModule {}
