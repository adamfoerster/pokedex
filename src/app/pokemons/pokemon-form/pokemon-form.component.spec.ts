import { PokemonService } from './../pokemon.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { PokemonFormComponent } from './pokemon-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

describe('PokemonFormComponent', () => {
  let component: PokemonFormComponent;
  let fixture: ComponentFixture<PokemonFormComponent>;
  let service: PokemonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFormComponent],
      imports: [
        HttpClientModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow sending form with missing info', () => {
    component.pokeForm.patchValue({
      id: '186b06b1-7de8-4d17-8482-297d75cf28fb',
      name: 'bubasaur',
      description: 'Bulbasaur can be seen napping in bright sunlight.',
      height: 1.2,
      weight: 3.2,
      category_id: '1a921bca-0156-4ea0-a8bd-b748090940xx',
      hability_id: '186b06b1-7de8-4d17-8482-297d75cf28fb',
      attack: 3,
      defense: 2
    });
    const saveButton = fixture.debugElement.query(By.css('button.mat-primary'));
    saveButton.triggerEventHandler('click', null);
    const speedEl = fixture.debugElement.query(
      By.css('input[placeholder="Velocidade"].ng-invalid')
    );
    expect(speedEl).toBeTruthy();
  });

  it('should send form with ok info', () => {
    component.pokeForm.patchValue({
      id: 'teste',
      name: 'teste',
      description: 'Bulbasaur can be seen napping in bright sunlight.',
      height: 1.2,
      weight: 3.2,
      category_id: '1a921bca-0156-4ea0-a8bd-b748090940xx',
      hability_id: '186b06b1-7de8-4d17-8482-297d75cf28fb',
      attack: 3,
      defense: 2,
      speed: 4
    });
    expect(component.pokeForm.valid).toBeTruthy();
  });
});
