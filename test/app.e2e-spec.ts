import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { print } from 'graphql';
import { AppModule } from './../src/app.module';
import { createUserMutation, getUsersQuery } from '../src/utils/queries';
import { DataSource } from 'typeorm';

describe('GraphQL Server (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    const dataSource = app.get(DataSource);
    await dataSource.synchronize(true);
    await app.init();
  });

  afterAll(async () => {
    const dataSource = app.get(DataSource);
    await dataSource.dropDatabase();
    await app.close();
  });

  describe('getAllUsers', () => {
    it('should query getUsers and return 0 users', () => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query: print(getUsersQuery) })
        .expect((res) => {
          expect(res.body.data.getAllUsers).toHaveLength(0);
        });
    });
    it('should create a user using createUser mutation', () => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: print(createUserMutation),
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.createUser).toEqual({
            id: 1,
            username: 'bigbr41n',
            email: 'bigbr41n@gmail.com',
          });
        });
    });
    it('should query getUsers and return 1 users', () => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query: print(getUsersQuery) })
        .expect((res) => {
          expect(res.body.data.getAllUsers).toHaveLength(1);
        });
    });
  });
});
