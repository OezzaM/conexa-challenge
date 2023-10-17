import { Controller, Get, Query, Req, Param } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PeopleService } from './people.service';
import { People } from '../../entities/people.entity';
import { PaginatedListDto } from '../../common/pagination/DTOs/paginated-list.dto';

@Controller('peoples')
@ApiTags('Peoples')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('/')
  @ApiOperation({
    summary: 'This endpoint allows to see all people of swapi',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    example: '0',
    description: 'The number of peoples you wish to skip from the beginning',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    example: '5',
    description: 'Especifies the number of peoples returned per page',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    example: 'string',
    description: 'Especifies the name of peoples you want to search',
  })
  public async getPeopleAsync(
    @Req() request,
    @Query('offset') offset = '0',
    @Query('limit') limit = '5',
    @Query('search') search = '',
  ): Promise<PaginatedListDto<People>> {
    return await this.peopleService.getPeople(
      offset,
      limit,
      search,
      request.url,
    );
  }

  @Get(':id')
  @ApiOperation({
    summary: 'This endpoint allows to get an people by id',
  })
  public async getPeopleByIdAsync(@Param('id') id: string): Promise<People> {
    return this.peopleService.getPeopleById(Number(id));
  }
}
