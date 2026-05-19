import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AmexAddDeleteMerchantPanelComponent
} from '@vn-core/ui-components';

import { Merchant } from '../../models/merchant.model';
import { OmsMerchantService } from '../../services/oms-merchant.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-merchant-panel',
  standalone: true,
  imports: [
    CommonModule,
    AmexAddDeleteMerchantPanelComponent
  ],
  templateUrl: './oms-merchant-panel.component.html',
  styleUrls: ['./oms-merchant-panel.component.css']
})
export class OmsMerchantPanelComponent
  implements OnInit {

  merchantOptions: any[] = [];

  @Output()
  startClicked = new EventEmitter<void>();

  constructor(
    private merchantService: OmsMerchantService
  ) {}

  ngOnInit() {

    this.merchantService.merchants$
      .subscribe(data => {

        this.merchantOptions = data.map(
        merchant => ({
            merchantNo: merchant.merchantNo,

            label:
            `${merchant.merchantNo} - IBAN: ${merchant.ibanLast5Digits}`
        })
        );

        console.log('Merchant List:', data);
      });
  }

  // 👉 add merchant event
  onAddMerchant(event: any) {

    console.log('Add Merchant Event:', event);

    this.merchantService.addMerchant(
      event.primaryMerchantNumber,
      event.ibanLast5Digits
    );
  }

  // 👉 delete merchant event
  onDeleteMerchant(event: any) {

    console.log('Delete Merchant:', event);

    this.merchantService
      .deleteMerchant(event.merchantNo);
  }

  handleClick(event: any) {

    const text =
        event.target?.innerText?.trim();

    console.log('Clicked:', text);

    // 👉 detect submit click
    if (text === 'Submit') {

        // 👉 mock values for now
        const merchantNo = 'M1001';

        const ibanLast5Digits = '45678';

        this.merchantService.addMerchant(
        merchantNo,
        ibanLast5Digits
        );
    }
    }

    onStart() {

    console.log('Start Clicked');

    this.startClicked.emit();
    }
}