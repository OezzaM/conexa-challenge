import { Controller, Get, Query, Req, Param } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PlanetsService } from './planets.service';
import { PaginatedListDto } from 'src/common/pagination/DTOs/paginated-list.dto';
import { Planet } from 'src/entities/planet.entity';

@Controller('planets')
@ApiTags('Planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get('/')
  @ApiOperation({
    summary: 'This endpoint allows to see all planets of swapi',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    example: '0',
    description: 'The number of planets you wish to skip from the beginning',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    example: '5',
    description: 'Especifies the number of planets returned per page',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    example: 'string',
    description: 'Especifies the name of planets you want to search',
  })
  public async getPlanetsAsync(
    @Req() request,
    @Query('offset') offset = '0',
    @Query('limit') limit = '5',
    @Query('search') search = '',
  ): Promise<PaginatedListDto<Planet>> {
    return await this.planetsService.getPlanets(
      offset,
      limit,
      search,
      request.url,
    );
  }

  @Get(':id')
  @ApiOperation({
    summary: 'This endpoint allows to get a planet by id',
  })
  public async getPlanetByIdAsync(@Param('id') id: string): Promise<Planet> {
    return this.planetsService.getPlanetById(Number(id));
  }
}
