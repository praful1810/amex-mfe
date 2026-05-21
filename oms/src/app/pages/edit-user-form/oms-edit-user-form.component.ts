import {
  Component,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  AmexEditUserFormComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-edit-user-form',

  standalone: true,

  imports: [
    CommonModule,
    AmexEditUserFormComponent
  ],

  templateUrl:
    './oms-edit-user-form.component.html',

  styles: [`

    :host {

      width: 100%;
    }

  `]
})
export class OmsEditUserFormComponent {

  @Input()
  title =
    'EDIT USER';

  @Input()
  showRole = false;

  @Input()
  data: any = {

    userId:
      'wasimtest123',

    userName:
      'wasimtest123',

    emailAddress:
      'wasim.sayyed@americanexpress.com.bh',

    role: '',

    status:
      'Active'
  };
}