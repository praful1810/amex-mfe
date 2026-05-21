import {
  Component,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  AmexMonthsDropdownFilterComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-months-dropdown-filter',

  standalone: true,

  imports: [
    CommonModule,
    AmexMonthsDropdownFilterComponent
  ],

  templateUrl:
    './oms-months-dropdown-filter.component.html',

  styles: [`

    :host {

      width: 100%;
    }

  `]
})
export class OmsMonthsDropdownFilterComponent {

  @Input()
  label =
    'Select number of months';

  @Input()
  buttonLabel = 'Submit';

  @Input()
  hint =
    'Select the number of months for which transaction data should be displayed.';

  @Input()
  monthOptions = [
    1,
    2,
    3,
    6,
    12
  ];
}