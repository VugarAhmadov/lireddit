import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInput } from 'src/graphql.classes';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async create(input: UserInput): Promise<User> {
    const user = new User();
    user.username = input.username;
    user.password = input.password;
    user.age = input.age;
    user.email = input.email;
    await this.userRepo.save(user);

    return user;
  }
}
