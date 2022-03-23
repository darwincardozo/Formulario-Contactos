import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes

import { FormularioContactosComponent } from './components/formulario/formulario-contactos.component';

const routes: Routes = [
  { path: '', component: FormularioContactosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
