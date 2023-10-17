import { Injectable } from '@nestjs/common';
import { PaginationDto } from './DTOs/pagination.dto';

@Injectable()
export class Pagination {
  limitRegex = /limit=\d+/;
  offsetRegex = /offset=\d+/;

  parseLimit(limit: string): number {
    return !isNaN(parseInt(limit)) ? parseInt(limit) : 15;
  }

  parseOffset(offset: string): number {
    return !isNaN(parseInt(offset)) ? parseInt(offset) : 0;
  }

  buildPaginationDto(
    limit: number,
    currentOffset: number,
    total: number,
    path: string,
  ): PaginationDto {
    const response = new PaginationDto();
    response.limit = limit;
    response.offset = currentOffset;
    response.total = total;
    if (limit !== -1) {
      response.nextPage =
        limit + currentOffset < total
          ? this.buildNextPage(path, limit, currentOffset)
          : null;
    }

    return response;
  }

  buildNextPage(path: string, limit: number, currentOffset: number): string {
    let url = process.env.URL_BASE + path;

    if (this.limitRegex.test(url)) {
      url = url.replace(this.limitRegex, `limit=${limit}`);
    } else {
      url = `${url}${url.includes('?') ? '&' : '?'}limit=${limit}`;
    }

    if (this.offsetRegex.test(url)) {
      url = url.replace(this.offsetRegex, `offset=${currentOffset + limit}`);
    } else {
      url = `${url}${url.includes('?') ? '&' : '?'}offset=${
        currentOffset + limit
      }`;
    }

    return url;
  }
}
