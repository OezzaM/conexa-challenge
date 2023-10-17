import { Controller, Post } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ScriptService } from './script.service';

@Controller('script')
@ApiTags('Script')
export class ScriptController {
  constructor(private readonly scriptService: ScriptService) {}

  @Post('/populateFilms')
  @ApiHeader({
    name: 'apiKey',
  })
  @ApiOperation({
    summary: 'This endpoint allows populate films of swapi',
  })
  public async populateFilms(): Promise<any> {
    return await this.scriptService.populateFilms();
  }

  @Post('/populatePeoples')
  @ApiHeader({
    name: 'apiKey',
  })
  @ApiOperation({
    summary: 'This endpoint allows populate peoples of swapi',
  })
  public async populatePeoples(): Promise<any> {
    return await this.scriptService.populatePeoples();
  }

  @Post('/populatePlanets')
  @ApiHeader({
    name: 'apiKey',
  })
  @ApiOperation({
    summary: 'This endpoint allows populate planets of swapi',
  })
  public async populatePlanets(): Promise<any> {
    return await this.scriptService.populatePlanets();
  }

  @Post('/populateStarships')
  @ApiHeader({
    name: 'apiKey',
  })
  @ApiOperation({
    summary: 'This endpoint allows populate starship of swapi',
  })
  public async populateStarship(): Promise<any> {
    return await this.scriptService.populateStarships();
  }
}
