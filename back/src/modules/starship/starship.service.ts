import { Injectable } from '@nestjs/common';
import { ILike, Repository, Not, IsNull } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Starship } from '../../entities/starship.entity';
import { PaginatedListDto } from '../../common/pagination/DTOs/paginated-list.dto';
import { Pagination } from '../../common/pagination/pagination';

@Injectable()
export class StarshipService {
  constructor(
    @InjectRepository(Starship)
    private starshipRepository: Repository<Starship>,
    private readonly pagination: Pagination,
  ) {}

  public async getStarship(
    offset: string,
    limit: string,
    search: string,
    path: string,
  ): Promise<PaginatedListDto<Starship>> {
    const parsedOffset = this.pagination.parseOffset(offset);
    const parsedLimit = this.pagination.parseLimit(limit);
    const collection = await this.starshipRepository.find({
      where: { name: ILike(`%${search}%`), url: Not(IsNull()) },
      order: { id: 'ASC' },
      skip: parsedOffset,
      take: parsedLimit,
    });
    const totalCount = await this.starshipRepository.count({
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

  public async getStarshipById(id: number): Promise<Starship> {
    const film = await this.starshipRepository.findOne({
      where: { id },
    });
    return film;
  }
}
