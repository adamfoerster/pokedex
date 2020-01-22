import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilitiesRoutingModule } from './habilities-routing.module';
import { HabilitiesComponent } from './habilities.component';
import { HabilitiesTableComponent } from './habilities-table/habilities-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HabilitiesFormComponent } from './habilities-form/habilities-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

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
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class HabilitiesModule {}
