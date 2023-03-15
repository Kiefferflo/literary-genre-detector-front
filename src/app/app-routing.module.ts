import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiFormComponent } from './api-form/api-form.component';

const routes: Routes = [
  { path: '', component:ApiFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
