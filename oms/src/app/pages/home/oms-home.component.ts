import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AmexTabBarComponent,
  AmexTabItem
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-home',
  standalone: true,
  imports: [
    CommonModule,
    AmexTabBarComponent
  ],
  templateUrl: './oms-home.component.html',
})
export class OmsHomeComponent {

  @Output() tabChanged = new EventEmitter<string>();

  tabs: AmexTabItem[] = [
    {
      id: 'settlement',
      label: 'Settlement and Submissions'
    },
    {
      id: 'merchantaccount',
      label: 'Merchant Account'
    },
    {
      id: 'subuseradministration',
      label: 'Sub User Administration'
    },
    {
      id: 'password',
      label: 'Change Your Password'
    },
    {
      id: 'termsandconditions',
      label: 'Terms & Conditions'
    },
    {
      id: 'daterange',
      label: 'Date Range'
    },
    {
      id: 'searchreports',
      label: 'Search Reports'
    },
    {
      id: 'customizedreports',
      label: 'Customized Reports'
    }
  ];

  activeTabId = 'mrmusers';

  onTabClick(tabId: string) {

    this.activeTabId = tabId;

    console.log('Selected Tab:', tabId);

    this.tabChanged.emit(tabId);
  }
}
