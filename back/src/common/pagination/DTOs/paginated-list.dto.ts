import { PaginationDto } from './pagination.dto';

export class PaginatedListDto<T> {
  collection: T[];
  pagination: PaginationDto;

  constructor(collection: T[], pagination: PaginationDto) {
    this.collection = collection;
    this.pagination = pagination;
  }
}
