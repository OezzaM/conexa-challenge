import { TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ILike, IsNull, Not, Repository } from 'typeorm';
import { createTestingModule, MockType } from '../mocks';
import { PaginationDto } from 'src/common/pagination/DTOs/pagination.dto';
import { PeopleService } from 'src/modules/people/people.service';
import { People } from 'src/entities/people.entity';

describe('People Service Unit Testing', () => {
  let peopleService: PeopleService;
  let mockPeopleRepository: MockType<Repository<People>>;

  const mockPeople: People = {
    id: 1,
    name: 'string',
    url: 'url',
    eye_color: '',
    gender: '',
    hair_color: '',
    height: '',
    mass: '',
    skin_color: '',
  };

  beforeEach(async () => {
    const module: TestingModule = await createTestingModule();
    peopleService = module.get<PeopleService>(PeopleService);
    mockPeopleRepository = module.get(getRepositoryToken(People));
  });

  it('The service and the repository should be defined', async () => {
    expect(peopleService).toBeDefined();
    expect(mockPeopleRepository).toBeDefined();
  });

  it('You should be able to get all peoples paginated', async () => {
    jest
      .spyOn(mockPeopleRepository, 'find')
      .mockImplementation(() => Promise.resolve([mockPeople]));
    jest
      .spyOn(mockPeopleRepository, 'count')
      .mockImplementation(() => Promise.resolve(1));
    const response = await peopleService.getPeople(
      '0',
      '15',
      'string',
      'https://string:8080',
    );
    expect(mockPeopleRepository.find).toHaveBeenCalledWith({
      where: { name: ILike(`%string%`), url: Not(IsNull()) },
      order: { id: 'ASC' },
      skip: 0,
      take: 15,
    });
    expect(mockPeopleRepository.count).toHaveBeenCalledWith({
      where: { name: ILike(`%string%`), url: Not(IsNull()) },
    });
    expect(response).toEqual({
      collection: [mockPeople],
      pagination: {
        limit: 15,
        nextPage: null,
        offset: 0,
        total: 1,
      } as PaginationDto,
    });
  });

  it('You should be able to get a people by id', async () => {
    mockPeopleRepository.findOne.mockImplementation(jest.fn(() => mockPeople));
    const people = await peopleService.getPeopleById(1);
    expect(mockPeopleRepository.findOne).toHaveBeenCalledWith({
      where: { id: 1 },
    });
    expect(people).toStrictEqual(mockPeople);
  });
});
