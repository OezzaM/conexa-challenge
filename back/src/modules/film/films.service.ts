import { Injectable } from '@nestjs/common';
import { ILike, IsNull, Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from '../../entities/film.entity';
import { Pagination } from '../../common/pagination/pagination';
import { PaginatedListDto } from '../../common/pagination/DTOs/paginated-list.dto';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film)
    private filmRepository: Repository<Film>,
    private readonly pagination: Pagination,
  ) {}

  public async getFilms(
    offset: string,
    limit: string,
    search: string,
    path: string,
  ): Promise<PaginatedListDto<Film>> {
    const parsedOffset = this.pagination.parseOffset(offset);
    const parsedLimit = this.pagination.parseLimit(limit);
    const collection = await this.filmRepository.find({
      where: { name: ILike(`%${search}%`), url: Not(IsNull()) },
      order: { episode_id: 'ASC' },
      skip: parsedOffset,
      take: parsedLimit,
    });
    const totalCount = await this.filmRepository.count({
      where: { name: ILike(`%${search}%`), url: Not(IsNull()) },
    });
    return {
      collection,
      pagination: this.pagination.buildPaginationDto(
        parsedLimit,
        parsedOffset,
        totalCount,
        path,
      ),
    };
  }

  public async getFilmById(id: number): Promise<Film> {
    const film = await this.filmRepository.findOne({
      where: { id },
    });
    return film;
  }
}
