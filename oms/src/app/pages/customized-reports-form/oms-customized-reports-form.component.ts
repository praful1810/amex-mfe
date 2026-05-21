import {
  Component
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  AmexCustomizedReportsFormComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-customized-reports-form',

  standalone: true,

  imports: [
    CommonModule,
    AmexCustomizedReportsFormComponent
  ],

  templateUrl:
    './oms-customized-reports-form.component.html',

  styles: [`

    :host {

      width: 100%;
    }

  `]
})
export class OmsCustomizedReportsFormComponent {}