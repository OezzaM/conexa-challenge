import { Module } from '@nestjs/common';
import { StarshipController } from './starship.controller';
import { StarshipService } from './starship.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Starship } from '../../entities/starship.entity';
import { Pagination } from '../../common/pagination/pagination';

@Module({
  imports: [TypeOrmModule.forFeature([Starship])],
  controllers: [StarshipController],
  providers: [StarshipService, Pagination],
  exports: [StarshipService],
})
export class StarshipModule {}
