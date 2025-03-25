import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/address-list/address-list.component').then(
        (m) => m.AddressListComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/Login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./pages/add-person-form/add-person-form.component').then(
        (m) => m.AddPersonFormComponent
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./pages/add-person-form/add-person-form.component').then(
        (m) => m.AddPersonFormComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
