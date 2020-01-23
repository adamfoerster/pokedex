import { IPokemon } from './../interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { uuidv4 } from '../shared/helpers';

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
  constructor(private http: HttpClient) {}

  fetchPokemons() {
    return this.http
      .get<IPokemon[]>(`${env.api}pokemons`)
      .subscribe(habs => this.pokemons.next(habs));
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
