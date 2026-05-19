import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AmexMerchantDataFormComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-merchant-data-form',
  standalone: true,
  imports: [
    CommonModule,
    AmexMerchantDataFormComponent
  ],
  templateUrl:
    './oms-merchant-data-form.component.html',
})
export class OmsMerchantDataFormComponent {

  title = 'MERCHANT DETAILS';

  backLabel = 'Back';

  submitLabel = 'Submit';

  onSubmit(event: any) {

    console.log(
      'Merchant Form Submitted:',
      event
    );
  }

  onBack(event: any) {

    console.log('Back Clicked');
  }
}