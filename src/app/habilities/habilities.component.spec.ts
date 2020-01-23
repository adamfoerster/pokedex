import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HabilitiesTableComponent } from './habilities-table/habilities-table.component';
import { HabilitiesFormComponent } from './habilities-form/habilities-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitiesComponent } from './habilities.component';

describe('HabilitiesComponent', () => {
  let component: HabilitiesComponent;
  let fixture: ComponentFixture<HabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HabilitiesComponent,
        HabilitiesFormComponent,
        HabilitiesTableComponent
      ],
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTableModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
