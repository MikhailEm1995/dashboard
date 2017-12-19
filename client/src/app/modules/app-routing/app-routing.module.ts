import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AuthPageComponent } from '../../pages/auth-page/auth-page.component';
import { StorePageComponent } from '../../pages/store-page/store-page.component';

import { AUTH, STORE } from '../../../constants/routes';

const appRoutes: Routes = [
  { path: AUTH, component: AuthPageComponent },
  { path: STORE, component: StorePageComponent },
  { path: '', redirectTo: AUTH, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
