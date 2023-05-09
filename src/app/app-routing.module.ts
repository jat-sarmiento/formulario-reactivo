import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeliculaComponent} from "./pelicula/pelicula.component";

const routes: Routes = [
  {
    path: 'pelicula',
    component: PeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
