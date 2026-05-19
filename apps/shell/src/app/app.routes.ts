import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'vat_invoice',
    loadChildren: () =>
      import('vat_invoice/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'bcrb',
    loadChildren: () => import('bcrb/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
