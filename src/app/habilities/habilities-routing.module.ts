import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilitiesComponent } from './habilities.component';

const routes: Routes = [{ path: '', component: HabilitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabilitiesRoutingModule {}
