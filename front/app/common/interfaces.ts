export interface Post {
  id: number;
  name: string;
  url: string;
  episode_id?: number;
  category?: string;
}

export interface Film {
  id: number;
  name: string;
  url: string;
  opening_crawl: string;
  director: string;
  producer: string;
  peoples: string;
  starships: string;
  planets: string;
}

export interface Starship {
  id: number;
  name: string;
  url: string;
  model: string;
  manufacturer: string;
  crew: string;
  passengers: string;
  consumables: string;
  starship_class: string;
}
export interface Planet {
  id: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
}


export interface Pagination {
  limit: number;
  offset: number;
  total: number;
  nextPage: string;
}