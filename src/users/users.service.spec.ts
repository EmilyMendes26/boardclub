<<<<<<< HEAD
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { UserRepositories } from '../UserRepositories';
import { Database } from '../DatabaseRepositories';
import { DatabaseRepositories } from './repositories/DatabaseRepositories';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepositories,
          useClass: DatabaseRepositories,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should create a user', async () => {
    await service.createUser({ name: 'Teste' });
    // assertivas aqui...
  });
});
=======
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { UserRepositories } from '../UserRepositories';
import { Database } from '../DatabaseRepositories';
import { DatabaseRepositories } from './repositories/DatabaseRepositories';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepositories,
          useClass: DatabaseRepositories,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should create a user', async () => {
    await service.createUser({ name: 'Teste' });
    // assertivas aqui...
  });
});
>>>>>>> ed457f63d58407c41f6a121afa9e60000f1d32a6
