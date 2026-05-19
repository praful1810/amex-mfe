import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmexTopNavBarComponent } from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-header',
  standalone: true,
  imports: [
    CommonModule,
    AmexTopNavBarComponent
  ],
  templateUrl: './oms-header.component.html',
})
export class OmsHeaderComponent {

  omsServiceName = 'Merchant Services';
}