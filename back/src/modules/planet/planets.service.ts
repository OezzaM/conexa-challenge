import { Injectable } from '@nestjs/common';
import { ILike, Repository, Not, IsNull } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Planet } from '../../entities/planet.entity';
import { PaginatedListDto } from '../../common/pagination/DTOs/paginated-list.dto';
import { Pagination } from '../../common/pagination/pagination';

@Injectable()
export class PlanetsService {
  constructor(
    @InjectRepository(Planet)
    private planetsRepository: Repository<Planet>,
    private readonly pagination: Pagination,
  ) {}

  public async getPlanets(
    offset: string,
    limit: string,
    search: string,
    path: string,
  ): Promise<PaginatedListDto<Planet>> {
    const parsedOffset = this.pagination.parseOffset(offset);
    const parsedLimit = this.pagination.parseLimit(limit);
    const collection = await this.planetsRepository.find({
      where: { name: ILike(`%${search}%`), url: Not(IsNull()) },
      order: { id: 'ASC' },
      skip: parsedOffset,
      take: parsedLimit,
    });
    const totalCount = await this.planetsRepository.count({
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

  public async getPlanetById(id: number): Promise<Planet> {
    const film = await this.planetsRepository.findOne({
      where: { id },
    });
    return film;
  }
}
