import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },{ path: 'loan', loadChildren: './loan/loan.module#LoanPageModule' }
];
