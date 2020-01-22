import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./pokemons/pokemons.module').then(m => m.PokemonsModule)
  },
  {
    path: 'habilities',
    loadChildren: () =>
      import('./habilities/habilities.module').then(m => m.HabilitiesModule)
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pokemons'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
