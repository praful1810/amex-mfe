import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Merchant } from '../models/merchant.model';

@Injectable({
  providedIn: 'root'
})
export class OmsMerchantService {

  private merchantsSubject =
    new BehaviorSubject<Merchant[]>([]);

  merchants$ =
    this.merchantsSubject.asObservable();

  private merchants: Merchant[] = [];

  constructor() {}

  // 👉 add merchant
  addMerchant(
    merchantNo: string,
    ibanLast5Digits: string
  ) {

    const alreadyExists =
      this.merchants.find(
        merchant =>
          merchant.merchantNo === merchantNo
      );

    if (alreadyExists) {

      console.log('Merchant already exists');

      return;
    }

    this.merchants.push({
      merchantNo,
      ibanLast5Digits
    });

    this.merchantsSubject.next(this.merchants);

    console.log('Merchant Added');
  }

  // 👉 delete merchant
  deleteMerchant(merchantNo: string) {

    this.merchants =
      this.merchants.filter(
        merchant =>
          merchant.merchantNo !== merchantNo
      );

    this.merchantsSubject.next(this.merchants);
  }
}