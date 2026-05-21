import {
  Component,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  AmexSettlementSubmissionsTableComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-settlement-submissions-table',

  standalone: true,

  imports: [
    CommonModule,
    AmexSettlementSubmissionsTableComponent
  ],

  templateUrl:
    './oms-settlement-submissions-table.component.html',

  styles: [`

    :host {

      width: 100%;
    }

  `]
})
export class OmsSettlementSubmissionsTableComponent {

  @Input()
  rows = [

    {
      period: 'Sep 2024',

      merchantAccount:
        '9275640241',

      settlementAmount:
        'AED 12,450.00',

      submissionsCount:
        '8',

      status:
        'Completed'
    },

    {
      period: 'Aug 2024',

      merchantAccount:
        '9275640241',

      settlementAmount:
        'AED 9,820.00',

      submissionsCount:
        '6',

      status:
        'Completed'
    },

    {
      period: 'Jul 2024',

      merchantAccount:
        '9275640241',

      settlementAmount:
        'AED 14,100.00',

      submissionsCount:
        '10',

      status:
        'Pending'
    }
  ];
}