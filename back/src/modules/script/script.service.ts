import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from 'src/entities/people.entity';
import { Film } from 'src/entities/film.entity';
import { Planet } from 'src/entities/planet.entity';
import { Starship } from 'src/entities/starship.entity';

@Injectable()
export class ScriptService {
  constructor(
    @InjectRepository(Film)
    private filmRepository: Repository<Film>,
    @InjectRepository(People)
    private peopleRepository: Repository<People>,
    @InjectRepository(Planet)
    private planetRepository: Repository<Planet>,
    @InjectRepository(Starship)
    private starshipRepository: Repository<Starship>,
  ) {}

  public async populateFilms(): Promise<void> {
    const films = await this.getApi(`${process.env.URL_SWAPI}/films/`);
    await this.filmRepository.clear();
    for await (const film of films.results) {
      await this.filmRepository.save({
        episode_id: film.episode_id,
        name: film.title,
        url: film.url,
        director: film.director,
        producer: film.producer,
        opening_crawl: film.opening_crawl,
      });
    }
  }

  public async populatePeoples(): Promise<void> {
    const peoples = [];
    let hasNext = true;
    let nextUrl = `${process.env.URL_SWAPI}/people/`;
    while (hasNext) {
      const newPeople = await this.getApi(nextUrl);
      for await (const people of newPeople.results) {
        peoples.push(people);
      }
      if (newPeople.next) {
        nextUrl = newPeople.next;
      } else {
        hasNext = false;
      }
    }
    await this.peopleRepository.clear();
    for await (const people of peoples) {
      await this.peopleRepository.save({
        name: people.name,
        url: people.url,
        eye_color: people.eye_color,
        gender: people.gender,
        hair_color: people.hair_color,
        height: people.height,
        mass: people.mass,
        skin_color: people.skin_color,
      });
    }
  }

  public async populatePlanets(): Promise<void> {
    const planets = [];
    let hasNext = true;
    let nextUrl = `${process.env.URL_SWAPI}/planets/`;
    while (hasNext) {
      const newPlanets = await this.getApi(nextUrl);
      for await (const planet of newPlanets.results) {
        planets.push(planet);
      }
      if (newPlanets.next) {
        nextUrl = newPlanets.next;
      } else {
        hasNext = false;
      }
    }
    await this.planetRepository.clear();
    for await (const planet of planets) {
      await this.planetRepository.save({
        name: planet.name,
        url: planet.url,
        rotation_period: planet.rotation_period,
        orbital_period: planet.orbital_period,
        diameter: planet.diameter,
        climate: planet.climate,
        gravity: planet.gravity,
        terrain: planet.terrain,
        population: planet.population,
      });
    }
  }

  public async populateStarships(): Promise<void> {
    const starships = [];
    let hasNext = true;
    let nextUrl = `${process.env.URL_SWAPI}/starships/`;
    while (hasNext) {
      const newStarship = await this.getApi(nextUrl);
      for await (const starship of newStarship.results) {
        starships.push(starship);
      }
      if (newStarship.next) {
        nextUrl = newStarship.next;
      } else {
        hasNext = false;
      }
    }
    await this.starshipRepository.clear();
    for await (const starship of starships) {
      await this.starshipRepository.save({
        name: starship.name,
        url: starship.url,
        model: starship.model,
        manufacturer: starship.manufacturer,
        crew: starship.crew,
        passengers: starship.passengers,
        consumables: starship.consumables,
        starship_class: starship.starship_class,
      });
    }
  }

  validateApiKey(apiKey: string) {
    return process.env.API_KEY === apiKey;
  }
  
  private async getApi(url: string) {
    return await fetch(url).then((response) => response.json());
  }
}
