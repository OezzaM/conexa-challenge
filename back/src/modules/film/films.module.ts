import { Module } from '@nestjs/common';
import { Film } from 'src/entities/film.entity';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Pagination } from 'src/common/pagination/pagination';

@Module({
  imports: [TypeOrmModule.forFeature([Film]), HttpModule],
  controllers: [FilmsController],
  providers: [FilmsService, Pagination],
  exports: [FilmsService],
})
export class FilmsModule {}
