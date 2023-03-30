import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiFormComponent } from './api-form/api-form.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
  { path: '', component:ApiFormComponent },
  { path: 'title', component:TitleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
