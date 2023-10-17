import { Injectable } from '@nestjs/common';
import { ILike, Repository, Not, IsNull } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from 'src/entities/people.entity';
import { PaginatedListDto } from 'src/common/pagination/DTOs/paginated-list.dto';
import { Pagination } from 'src/common/pagination/pagination';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private peopleRepository: Repository<People>,
    private readonly pagination: Pagination,
  ) {}

  public async getPeople(
    offset: string,
    limit: string,
    search: string,
    path: string,
  ): Promise<PaginatedListDto<People>> {
    const parsedOffset = this.pagination.parseOffset(offset);
    const parsedLimit = this.pagination.parseLimit(limit);
    const collection = await this.peopleRepository.find({
      where: { name: ILike(`%${search}%`), url: Not(IsNull()) },
      order: { id: 'ASC' },
      skip: parsedOffset,
      take: parsedLimit,
    });

    const totalCount = await this.peopleRepository.count({
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

  public async getPeopleById(id: number): Promise<People> {
    const film = await this.peopleRepository.findOne({
      where: { id },
    });
    return film;
  }
}
