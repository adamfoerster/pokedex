export interface IHability {
  id: string;
  name: string;
  description: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IPokemon {
  id: string;
  name: string;
  description: string;
  height: number;
  weight: number;
  category_id: string;
  category?: string;
  hability_id: string;
  hability?: string;
  speed: number;
  attack: number;
  defense: number;
}
