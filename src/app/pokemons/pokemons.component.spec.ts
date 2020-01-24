import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsComponent } from './pokemons.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonsComponent,
        PokemonCardComponent,
        PokemonFormComponent
      ],
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
