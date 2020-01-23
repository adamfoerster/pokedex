import { PokemonService } from './pokemon.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../categories/category.service';
import { HabilityService } from '../habilities/hability.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'pkd-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: false }) form;
  sub: Subscription;

  constructor(
    public service: PokemonService,
    public dialog: MatDialog,
    public category: CategoryService,
    public hability: HabilityService
  ) {}

  ngOnInit() {
    this.category.fetchCategories();
    this.hability.fetchHabilities();
    this.service.fetchPokemons();
    this.sub = this.service.selectedPokemon$
      .pipe(filter(p => !!p))
      .subscribe(() => this.openForm());
  }

  openForm() {
    this.dialog.open(this.form);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
