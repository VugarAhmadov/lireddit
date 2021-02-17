import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from 'src/graphql.classes';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  users() {
    return this.userService.findAll();
  }

  @Mutation()
  async createUser(@Args('input') input: UserInput) {
    return await this.userService.create(input);
  }
}
