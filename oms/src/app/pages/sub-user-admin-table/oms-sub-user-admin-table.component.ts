import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  AmexSubUserAdminTableComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-sub-user-admin-table',

  standalone: true,

  imports: [
    CommonModule,
    AmexSubUserAdminTableComponent
  ],

  templateUrl:
    './oms-sub-user-admin-table.component.html',

  styles: [`

    :host {

      width: 100%;
    }

  `]
})
export class OmsSubUserAdminTableComponent {

  @Input()
  title =
    'SUB USER ADMINISTRATION';

  @Input()
  showCreate = true;

  @Input()
  createLabel =
    'Create Sub User';

  @Output()
  createUserClicked = new EventEmitter<void>();

  @Output()
  editUserClicked = new EventEmitter<any>();

  @Input()
  rows = [

    {
      name:
        'Ahmed Al Mansouri',

      email:
        'ahmed@merchant.ae',

      role:
        'Sub User',

      status:
        'Active'
    },

    {
      name:
        'Sara Khalid',

      email:
        'sara@merchant.ae',

      role:
        'VAT User',

      status:
        'Active'
    },

    {
      name:
        'Omar Hassan',

      email:
        'omar@merchant.ae',

      role:
        'Sub User',

      status:
        'Inactive'
    }
  ];

  handleClick(event: any) {

  const text =
    event.target?.innerText?.trim();

  console.log(
    'Clicked:',
    text
  );

  if (
    text?.toLowerCase()
      .includes('create')
  ) {

    this.createUserClicked.emit();
  }

  // EDIT
  if (
    text?.toLowerCase()
      .includes('edit')
  ) {

    const selectedUser =
      this.rows[0];

    this.editUserClicked.emit(
      selectedUser
    );
  }
}
}