import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilitiesRoutingModule } from './habilities-routing.module';
import { HabilitiesComponent } from './habilities.component';
import { HabilitiesTableComponent } from './habilities-table/habilities-table.component';
import { MatTableModule } from '@angular/material/table';
import { HabilitiesFormComponent } from './habilities-form/habilities-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HabilitiesComponent,
    HabilitiesTableComponent,
    HabilitiesFormComponent,
    HabilitiesFormComponent
  ],
  imports: [
    CommonModule,
    HabilitiesRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HabilitiesModule {}
