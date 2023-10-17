import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ORM_CONFIG } from './constants/ormConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsModule } from './modules/film/films.module';
import { HttpModule } from '@nestjs/axios';
import { PeopleModule } from './modules/people/people.module';
import { ScriptModule } from './modules/script/script.module';
import { PlanetsModule } from './modules/planet/planets.module';
import { StarshipModule } from './modules/starship/starship.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ORM_CONFIG),
    FilmsModule,
    HttpModule,
    PeopleModule,
    PlanetsModule,
    StarshipModule,
    ScriptModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
