import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  saveUser(email: string): Promise<User> {
    return this.userRepository.save({ email });
  }

  getUserByEmail(email: string): Promise<User> {
      return this.userRepository.findOne({ email })
  }
}
