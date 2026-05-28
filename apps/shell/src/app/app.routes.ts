import {
  Route
} from '@angular/router';

import {
  NxWelcome
} from './nx-welcome';

import {
  OmsPageShellComponent
} from './pages/oms-page-shell.component';

export const appRoutes: Route[] = [

  // DEFAULT HOME
  {
    path: '',

    component:
      NxWelcome,
  },

  // VAT INVOICE MFE
  {
    path:
      'vat_invoice',

    loadChildren: () =>

      import(
        'vat_invoice/Routes'
      ).then(
        (m) => m!.remoteRoutes
      ),
  },

  // BCRB MFE
  {
    path:
      'bcrb',

    loadChildren: () =>

      import(
        'bcrb/Routes'
      ).then(
        (m) => m!.remoteRoutes
      ),
  },

  // OMS PAGE SHELL
  {
  path: 'oms',

  component:
    OmsPageShellComponent,

  children: [

    {
      path: '',

      loadChildren: () =>

        import(
          'oms/Routes'
        ).then(
          (m) => m!.remoteRoutes
        ),
    },

    {
      path: ':tab',

      loadChildren: () =>

        import(
          'oms/Routes'
        ).then(
          (m) => m!.remoteRoutes
        ),
    }
  ]
}
];