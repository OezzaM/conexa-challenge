import { Controller, Get, Req, Query, Param } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FilmsService } from './films.service';
import { Film } from 'src/entities/film.entity';
import { PaginatedListDto } from 'src/common/pagination/DTOs/paginated-list.dto';

@Controller('films')
@ApiTags('Films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get('/')
  @ApiOperation({
    summary: 'This endpoint allows to see all films',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    example: '0',
    description: 'The number of films you wish to skip from the beginning',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    example: '5',
    description: 'Especifies the number of films returned per page',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    example: 'string',
    description: 'Especifies the name of films you want to search',
  })
  public async getFilms(
    @Req() request,
    @Query('offset') offset = '0',
    @Query('limit') limit = '5',
    @Query('search') search = '',
  ): Promise<PaginatedListDto<Film>> {
    return await this.filmsService.getFilms(offset, limit, search, request.url);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'This endpoint allows to get a Film by id',
  })
  public async getFilmByIdAsync(@Param('id') id: string): Promise<Film> {
    return this.filmsService.getFilmById(Number(id));
  }
}
