import { TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ILike, IsNull, Not, Repository } from 'typeorm';
import { createTestingModule, MockType } from '../mocks';
import { PaginationDto } from 'src/common/pagination/DTOs/pagination.dto';
import { PlanetsService } from 'src/modules/planet/planets.service';
import { Planet } from 'src/entities/planet.entity';

describe('Planet Service Unit Testing', () => {
  let planetService: PlanetsService;
  let mockPlanetRepository: MockType<Repository<Planet>>;

  const mockPlanet: Planet = {
    id: 1,
    name: 'string',
    url: 'url',
    climate: '',
    diameter: '',
    gravity: '',
    orbital_period: '',
    population: '',
    rotation_period: '',
    terrain: ''
  };

  beforeEach(async () => {
    const module: TestingModule = await createTestingModule();
    planetService = module.get<PlanetsService>(PlanetsService);
    mockPlanetRepository = module.get(getRepositoryToken(Planet));
  });

  it('The service and the repository should be defined', async () => {
    expect(planetService).toBeDefined();
    expect(mockPlanetRepository).toBeDefined();
  });

  it('You should be able to get all planets paginated', async () => {
    jest
      .spyOn(mockPlanetRepository, 'find')
      .mockImplementation(() => Promise.resolve([mockPlanet]));
    jest
      .spyOn(mockPlanetRepository, 'count')
      .mockImplementation(() => Promise.resolve(1));
    const response = await planetService.getPlanets(
      '0',
      '15',
      'string',
      'https://string:8080',
    );
    expect(mockPlanetRepository.find).toHaveBeenCalledWith({
      where: { name: ILike(`%string%`), url: Not(IsNull()) },
      order: { id: 'ASC' },
      skip: 0,
      take: 15,
    });
    expect(mockPlanetRepository.count).toHaveBeenCalledWith({
      where: { name: ILike(`%string%`), url: Not(IsNull()) },
    });
    expect(response).toEqual({
      collection: [mockPlanet],
      pagination: {
        limit: 15,
        nextPage: null,
        offset: 0,
        total: 1,
      } as PaginationDto,
    });
  });

  it('You should be able to get a planet by id', async () => {
    mockPlanetRepository.findOne.mockImplementation(jest.fn(() => mockPlanet));
    const planet = await planetService.getPlanetById(1);
    expect(mockPlanetRepository.findOne).toHaveBeenCalledWith({
      where: { id: 1 },
    });
    expect(planet).toStrictEqual(mockPlanet);
  });
});
