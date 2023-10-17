import { Module } from '@nestjs/common';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Planet } from '../../entities/planet.entity';
import { Pagination } from '../../common/pagination/pagination';

@Module({
  imports: [TypeOrmModule.forFeature([Planet])],
  controllers: [PlanetsController],
  providers: [PlanetsService, Pagination],
  exports: [PlanetsService],
})
export class PlanetsModule {}
