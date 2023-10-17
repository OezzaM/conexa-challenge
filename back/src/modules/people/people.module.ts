import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from '../../entities/people.entity';
import { Pagination } from '../../common/pagination/pagination';

@Module({
  imports: [TypeOrmModule.forFeature([People])],
  controllers: [PeopleController],
  providers: [PeopleService, Pagination],
  exports: [PeopleService],
})
export class PeopleModule {}
