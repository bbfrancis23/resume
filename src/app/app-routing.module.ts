import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassicPageComponent } from './page/page-styles/classic/classic-page.component'

const routes: Routes = [
  { path: '', component: ClassicPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
