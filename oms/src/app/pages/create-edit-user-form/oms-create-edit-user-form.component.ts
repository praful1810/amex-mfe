import {
  Component,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  AmexMRMCreateEditUserFormComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-create-edit-user-form',

  standalone: true,

  imports: [
    CommonModule,
    AmexMRMCreateEditUserFormComponent
  ],

  templateUrl:
    './oms-create-edit-user-form.component.html',

  styles: [`

    :host {

      width: 100%;
    }

  `]
})
export class OmsCreateEditUserFormComponent {

  @Input()
  title =
    'CREATE USER';

  @Input()
  showMerchantAccess = true;
}