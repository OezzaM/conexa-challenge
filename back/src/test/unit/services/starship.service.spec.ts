import { TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ILike, IsNull, Not, Repository } from 'typeorm';
import { createTestingModule, MockType } from '../mocks';
import { PaginationDto } from 'src/common/pagination/DTOs/pagination.dto';
import { StarshipService } from 'src/modules/starship/starship.service';
import { Starship } from 'src/entities/starship.entity';

describe('Starship Service Unit Testing', () => {
  let starshipService: StarshipService;
  let mockStarshipRepository: MockType<Repository<Starship>>;

  const mockStarship: Starship = {
    id: 1,
    name: 'string',
    url: 'url',
    consumables: '',
    crew: '',
    manufacturer: '',
    model: '',
    passengers: '',
    starship_class: '',
  };

  beforeEach(async () => {
    const module: TestingModule = await createTestingModule();
    starshipService = module.get<StarshipService>(StarshipService);
    mockStarshipRepository = module.get(getRepositoryToken(Starship));
  });

  it('The service and the repository should be defined', async () => {
    expect(starshipService).toBeDefined();
    expect(mockStarshipRepository).toBeDefined();
  });

  it('You should be able to get all starships paginated', async () => {
    jest
      .spyOn(mockStarshipRepository, 'find')
      .mockImplementation(() => Promise.resolve([mockStarship]));
    jest
      .spyOn(mockStarshipRepository, 'count')
      .mockImplementation(() => Promise.resolve(1));
    const response = await starshipService.getStarship(
      '0',
      '15',
      'string',
      'https://string:8080',
    );
    expect(mockStarshipRepository.find).toHaveBeenCalledWith({
      where: { name: ILike(`%string%`), url: Not(IsNull()) },
      order: { id: 'ASC' },
      skip: 0,
      take: 15,
    });
    expect(mockStarshipRepository.count).toHaveBeenCalledWith({
      where: { name: ILike(`%string%`), url: Not(IsNull()) },
    });
    expect(response).toEqual({
      collection: [mockStarship],
      pagination: {
        limit: 15,
        nextPage: null,
        offset: 0,
        total: 1,
      } as PaginationDto,
    });
  });

  it('You should be able to get a starship by id', async () => {
    mockStarshipRepository.findOne.mockImplementation(jest.fn(() => mockStarship));
    const starship = await starshipService.getStarshipById(1);
    expect(mockStarshipRepository.findOne).toHaveBeenCalledWith({
      where: { id: 1 },
    });
    expect(starship).toStrictEqual(mockStarship);
  });
});
