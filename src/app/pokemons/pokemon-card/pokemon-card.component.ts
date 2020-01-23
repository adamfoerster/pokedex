import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from './../pokemon.service';
import { IPokemon } from './../../interfaces';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'pkd-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: IPokemon;
  @ViewChild('confirm', { static: true }) confirm;
  removeId: string;

  constructor(private service: PokemonService, private dialog: MatDialog) {}

  edit(id: string) {
    this.service.loadPokemon(id);
  }

  remove() {
    this.service
      .removePokemon(this.removeId)
      .subscribe(() => this.service.fetchPokemons());
  }

  openConfirm(id: string) {
    this.removeId = id;
    this.dialog.open(this.confirm);
  }

  ngOnInit() {}
}
