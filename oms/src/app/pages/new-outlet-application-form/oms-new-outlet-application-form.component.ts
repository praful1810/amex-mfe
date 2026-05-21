import {
  Component
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  AmexNewOutletApplicationFormComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector:'oms-new-outlet-application-form',

  standalone: true,

  imports: [
    CommonModule,
    AmexNewOutletApplicationFormComponent
  ],

  templateUrl:
    './oms-new-outlet-application-form.component.html',

  styles: [`

    :host {

      width: 100%;

      display: block;
    }

  `]
})
export class OmsNewOutletApplicationFormComponent {}