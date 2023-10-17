import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/* Services */
import { FilmsService } from 'src/modules/film/films.service';
import { PeopleService } from 'src/modules/people/people.service';
import { PlanetsService } from 'src/modules/planet/planets.service';
import { StarshipService } from 'src/modules/starship/starship.service';
import { Pagination } from 'src/common/pagination/pagination';

/* Entities */
import { Film } from 'src/entities/film.entity';
import { People } from 'src/entities/people.entity';
import { Planet } from 'src/entities/planet.entity';
import { Starship } from 'src/entities/starship.entity';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<any>;
};

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    find: jest.fn((entity) => entity),
    findOne: jest.fn((entity) => entity),
    findByIds: jest.fn((entity) => entity),
    save: jest.fn((entity) => entity),
    softDelete: jest.fn((entity) => entity),
    findAndCount: jest.fn((entity) => entity),
    count: jest.fn((entity) => entity),
    createQueryBuilder: jest.fn((entity) => entity),
    update: jest.fn((entity) => entity),
    upsert: jest.fn((entity) => entity),
    delete: jest.fn((entity) => entity),
  }),
);

const repositories = [
  { provide: getRepositoryToken(Film), useFactory: repositoryMockFactory },
  { provide: getRepositoryToken(People), useFactory: repositoryMockFactory },
  { provide: getRepositoryToken(Planet), useFactory: repositoryMockFactory },
  { provide: getRepositoryToken(Starship), useFactory: repositoryMockFactory },
];

const services = [
  FilmsService,
  PeopleService,
  PlanetsService,
  StarshipService,
  Pagination,
];

export const createTestingModule = async (): Promise<TestingModule> =>
  await Test.createTestingModule({
    imports: [HttpModule],
    providers: [...services, ...repositories],
  }).compile();