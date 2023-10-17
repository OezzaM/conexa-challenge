import { Controller, Get, Query, Req, Param } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';
import { StarshipService } from './starship.service';
import { PaginatedListDto } from 'src/common/pagination/DTOs/paginated-list.dto';
import { Starship } from 'src/entities/starship.entity';

@Controller('starships')
@ApiTags('Starships')
export class StarshipController {
  constructor(private readonly starshipService: StarshipService) {}

  @Get('/')
  @ApiOperation({
    summary: 'This endpoint allows to see all starships of swapi',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    example: '0',
    description: 'The number of starships you wish to skip from the beginning',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    example: '5',
    description: 'Especifies the number of starships returned per page',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    example: 'string',
    description: 'Especifies the name of starships you want to search',
  })
  public async getStarshipAsync(
    @Req() request,
    @Query('offset') offset = '0',
    @Query('limit') limit = '5',
    @Query('search') search = '',
  ): Promise<PaginatedListDto<Starship>> {
    return await this.starshipService.getStarship(
      offset,
      limit,
      search,
      request.url,
    );
  }

  @Get(':id')
  @ApiOperation({
    summary: 'This endpoint allows to get an starship by id',
  })
  public async getStarshipByIdAsync(
    @Param('id') id: string,
  ): Promise<Starship> {
    return this.starshipService.getStarshipById(Number(id));
  }
}
