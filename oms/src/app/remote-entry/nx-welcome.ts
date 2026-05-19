import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmsHomeComponent } from '../pages/home/oms-home.component';
import { OmsHeaderComponent } from '../pages/header/oms-header.component';

import { OmsMerchantPanelComponent } from '../pages/merchant-panel/oms-merchant-panel.component';

import { OmsMerchantDataFormComponent } from '../pages/merchant-data-form/oms-merchant-data-form.component';

import { OmsContactInformationComponent } from '../pages/contact-information/oms-contact-information.component';

import { OmsReportFormatComponent } from '../pages/report-format/oms-report-format.component';

import { OmsVatRegistrationComponent } from '../pages/vat-registration/oms-vat-registration.component';

import { OmsSidebarComponent } from '../pages/sidebar/oms-sidebar.component';

import { OmsTaxInvoiceDeliveryComponent } from '../pages/tax-invoice-delivery/oms-tax-invoice-delivery.component';

import { OmsUploadCertificateComponent } from '../pages/upload-certificate/oms-upload-certificate.component';

import { OmsTaxInvoiceReportComponent } from '../pages/tax-invoice-report/oms-tax-invoice-report.component';
import { OmsTermsAndConditionsComponent } from '../pages/terms-and-conditions/oms-terms-and-conditions.component';
import { OmsChangePasswordComponent } from '../pages/change-password/oms-change-password.component';

@Component({
  selector: 'app-nx-welcome',

  standalone: true,

  imports: [
    CommonModule,

    OmsHeaderComponent,
    OmsHomeComponent,

    OmsMerchantPanelComponent,
    OmsMerchantDataFormComponent,

    OmsContactInformationComponent,
    OmsReportFormatComponent,

    OmsVatRegistrationComponent,
    OmsSidebarComponent,

    OmsTaxInvoiceDeliveryComponent,
    OmsUploadCertificateComponent,

    OmsTaxInvoiceReportComponent,
    OmsTermsAndConditionsComponent,

    OmsChangePasswordComponent
  ],

  templateUrl: './remote-entry.html',

  styles: [`

    .layout {

      display: flex;

      width: 100%;

      min-height: calc(100vh - 120px);

      align-items: flex-start;
    }

    .sidebar {

      width: 200px;

      min-width: 200px;

      border-right: 1px solid #dcdcdc;

      background: #f8f8f8;
    }

    .content {

      flex: 1;

      padding: 24px;

      display: flex;

      justify-content: flex-start;

      align-items: flex-start;

      overflow-x: auto;
    }

  `],

  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {

  showSidebar = false;

  selectedSidebarMenu = '';

  showTaxInvoiceDelivery = false;

  showUploadCertificate = false;

  showTaxInvoiceReport = false;

  showTermsConditions = false;
  showChangePassword = false;

  // TAB CLICK
  onTabChanged(tabId: string) {

  console.log(
    'Selected Tab:',
    tabId
  );

  // RESET
  this.showSidebar = false;

  this.showTermsConditions = false;

  // MERCHANT ACCOUNT
  if (tabId === 'merchantaccount') {

    this.showSidebar = true;
  }

  // TERMS & CONDITIONS
  if (tabId === 'termsandconditions') {

    this.showTermsConditions = true;
  }

  // CHANGE PASSWORD
  if (tabId === 'password') {
    
    this.showChangePassword = true;
  }
}
  // SIDEBAR CLICK
  onMenuChanged(menuId: string) {

    console.log('Sidebar Menu:', menuId);

    this.selectedSidebarMenu = menuId;
  }

  // TAX INVOICE DELIVERY
  onTaxInvoiceDeliveryClicked() {

    this.showTaxInvoiceDelivery = true;
  }

  onBackToVatRegistration() {

    this.showTaxInvoiceDelivery = false;
  }

  // UPLOAD CERTIFICATE
  onUploadCertificateClicked() {

    this.showUploadCertificate = true;
  }

  onBackToVatRegistrationFromUpload() {

    this.showUploadCertificate = false;
  }

  // DOWNLOAD TAX INVOICE
  onDownloadTaxInvoiceClicked() {

    console.log(
      'Parent Method Triggered'
    );

    this.showTaxInvoiceReport = true;

    console.log(
      'showTaxInvoiceReport:',
      this.showTaxInvoiceReport
    );
  }

  // BACK FROM TAX REPORT
  onBackFromTaxInvoiceReport() {

    this.showTaxInvoiceReport = false;
  }
}