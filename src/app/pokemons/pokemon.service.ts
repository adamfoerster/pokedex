import { CategoryService } from './../categories/category.service';
import { HabilityService } from './../habilities/hability.service';
import { IPokemon, IHability, ICategory } from './../interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { uuidv4 } from '../shared/helpers';
import { filter, first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemons: BehaviorSubject<IPokemon[]> = new BehaviorSubject([]);
  private selectedPokemon: BehaviorSubject<IPokemon> = new BehaviorSubject(
    null
  );
  get pokemons$() {
    return this.pokemons.asObservable();
  }
  get selectedPokemon$() {
    return this.selectedPokemon.asObservable();
  }
  constructor(
    private http: HttpClient,
    private habilities: HabilityService,
    private categories: CategoryService
  ) {}

  fetchPokemons() {
    return combineLatest([
      this.http.get<IPokemon[]>(`${env.api}pokemons`),
      this.habilities.habilities$.pipe(
        filter(habs => !!habs.length),
        first()
      ),
      this.categories.categories$.pipe(
        filter(habs => !!habs.length),
        first()
      )
    ])
      .pipe(
        map(([pokes, habs, cats]) => {
          return pokes.map(p => this.mapWithCategoryAndHability(p, habs, cats));
        })
      )
      .subscribe(pokes => this.pokemons.next(pokes));
  }

  mapWithCategoryAndHability(
    pokemon: IPokemon,
    habs: IHability[],
    cats: ICategory[]
  ): IPokemon {
    return {
      ...pokemon,
      category: cats.find(cat => cat.id === pokemon.category_id).name,
      hability: habs.find(hab => hab.id === pokemon.hability_id).name
    };
  }

  loadPokemon(id) {
    return this.http
      .get<IPokemon>(`${env.api}pokemons/${id}`)
      .subscribe(hab => this.selectedPokemon.next(hab));
  }

  savePokemon(pokemon: IPokemon) {
    if (!pokemon.id) {
      return this.http.post(`${env.api}pokemons`, {
        ...pokemon,
        id: uuidv4()
      });
    }
    return this.http.patch(`${env.api}pokemons/${pokemon.id}`, pokemon);
  }

  removePokemon(id: string) {
    return this.http.delete(`${env.api}pokemons/${id}`);
  }

  desselectPokemon() {
    this.selectedPokemon.next(null);
  }
}
