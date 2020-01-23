import { MatDialog } from '@angular/material/dialog';
import { HabilityService } from './../../habilities/hability.service';
import { CategoryService } from './../../categories/category.service';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pkd-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit, OnDestroy {
  pokeForm = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    description: [null, Validators.required],
    height: [null, Validators.required],
    weight: [null, Validators.required],
    attack: [null, Validators.required],
    defense: [null, Validators.required],
    speed: [null, Validators.required],
    category_id: [null, Validators.required],
    hability_id: [null, Validators.required]
  });
  sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private service: PokemonService,
    private dialog: MatDialog,
    public category: CategoryService,
    public hability: HabilityService
  ) {}

  ngOnInit() {
    this.sub = this.service.selectedPokemon$
      .pipe(filter(hab => !!hab))
      .subscribe(hab => this.pokeForm.patchValue(hab));
  }

  onSubmit() {
    if (!this.pokeForm.valid) {
      return;
    }
    return this.service.savePokemon(this.pokeForm.value).subscribe(() => {
      this.service.fetchPokemons();
      this.pokeForm.reset();
      this.dialog.closeAll();
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
