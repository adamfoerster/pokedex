import { IPokemon } from './../../interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pkd-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: IPokemon;
  constructor() {}

  ngOnInit() {}
}
