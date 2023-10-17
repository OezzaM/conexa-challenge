import { TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ILike, IsNull, Not, Repository } from 'typeorm';
import { createTestingModule, MockType } from '../mocks';
import { Film } from 'src/entities/film.entity';
import { FilmsService } from 'src/modules/film/films.service';
import { PaginationDto } from 'src/common/pagination/DTOs/pagination.dto';

describe('Film Service Unit Testing', () => {
  let filmService: FilmsService;
  let mockFilmRepository: MockType<Repository<Film>>;

  const mockFilm: Film = {
    id: 1,
    name: 'string',
    episode_id: 1,
    url: 'url',
    director: '',
    opening_crawl: '',
    producer: ''
  };

  beforeEach(async () => {
    const module: TestingModule = await createTestingModule();
    filmService = module.get<FilmsService>(FilmsService);
    mockFilmRepository = module.get(getRepositoryToken(Film));
  });

  it('The service and the repository should be defined', async () => {
    expect(filmService).toBeDefined();
    expect(mockFilmRepository).toBeDefined();
  });

  it('You should be able to get all films paginated', async () => {
    jest
      .spyOn(mockFilmRepository, 'find')
      .mockImplementation(() => Promise.resolve([mockFilm]));
    jest
      .spyOn(mockFilmRepository, 'count')
      .mockImplementation(() => Promise.resolve(1));
    const response = await filmService.getFilms(
      '0',
      '15',
      'string',
      'https://string:8080',
    );
    expect(mockFilmRepository.find).toHaveBeenCalledWith({
      where: { name: ILike(`%string%`), url: Not(IsNull()) },
      order: { episode_id: 'ASC' },
      skip: 0,
      take: 15,
    });
    expect(mockFilmRepository.count).toHaveBeenCalledWith({
      where: { name: ILike(`%string%`), url: Not(IsNull()) },
    });
    expect(response).toEqual({
      collection: [mockFilm],
      pagination: {
        limit: 15,
        nextPage: null,
        offset: 0,
        total: 1,
      } as PaginationDto,
    });
  });

  it('You should be able to get a film by id', async () => {
    mockFilmRepository.findOne.mockImplementation(jest.fn(() => mockFilm));
    const film = await filmService.getFilmById(1);
    expect(mockFilmRepository.findOne).toHaveBeenCalledWith({
      where: { id: 1 },
    });
    expect(film).toStrictEqual(mockFilm);
  });
});
