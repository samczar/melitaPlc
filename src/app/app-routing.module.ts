import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferListComponent } from './offer-list/offer-list.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'offer-list', component: OfferListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
