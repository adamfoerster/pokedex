import { PokemonService } from './pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkd-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {
  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service.fetchPokemons();
  }
}
