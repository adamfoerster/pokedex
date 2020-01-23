import { PokemonService } from './pokemon.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../categories/category.service';
import { HabilityService } from '../habilities/hability.service';

@Component({
  selector: 'pkd-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  @ViewChild('form', { static: false }) form;

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
  }

  openForm() {
    this.dialog.open(this.form);
  }
}
