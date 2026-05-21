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
import { OmsCustomizedReportComponent } from '../pages/customized-reports/oms-customized-report.component';
import { OmsCustomizedReportsFormComponent } from '../pages/customized-reports-form/oms-customized-reports-form.component';
import { OmsMonthsDropdownFilterComponent } from '../pages/months-dropdown-filter/oms-months-dropdown-filter.component';
import { OmsSettlementSubmissionsTableComponent } from '../pages/settlement-submissions-table/oms-settlement-submissions-table.component';
import { OmsSubUserAdminTableComponent } from '../pages/sub-user-admin-table/oms-sub-user-admin-table.component';
import { OmsUserManagementTableComponent } from '../pages/user-management-table/oms-user-management-table.component';
import { OmsCreateEditUserFormComponent } from '../pages/create-edit-user-form/oms-create-edit-user-form.component';
import { OmsEditUserFormComponent } from '../pages/edit-user-form/oms-edit-user-form.component';
import { NewOutletPortalComponent } from '../pages/new-outlet/new-outlet-portal.component';
import { OmsNewOutletApplicationFormComponent } from '../pages/new-outlet-application-form/oms-new-outlet-application-form.component';

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

    OmsChangePasswordComponent,
    OmsCustomizedReportComponent,

    OmsCustomizedReportsFormComponent,
    OmsMonthsDropdownFilterComponent,

    OmsSettlementSubmissionsTableComponent,
    OmsSubUserAdminTableComponent,

    OmsUserManagementTableComponent,
    OmsCreateEditUserFormComponent,

    OmsEditUserFormComponent,
    NewOutletPortalComponent,

    OmsNewOutletApplicationFormComponent
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
    
    .popup-overlay {

  position: fixed;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  background: rgba(0, 0, 0, 0.5);

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 9999;
}

.popup-content {

  width: 700px;

  max-width: 90%;

  background: white;

  padding: 24px;

  border-radius: 8px;

  position: relative;

  max-height: 90vh;

  overflow-y: auto;
}

.close-btn {

  position: absolute;

  top: 12px;

  right: 12px;

  border: none;

  background: transparent;

  font-size: 20px;

  cursor: pointer;
}

  `],

  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {

  showSidebar = false;

  selectedSidebarMenu = '';

  editPopupTitle = '';

  showTaxInvoiceDelivery = false;

  showUploadCertificate = false;

  showTaxInvoiceReport = false;

  showTermsConditions = false;

  showChangePassword = false;

  showCustomizedReport = false;

  showSettlementSubmission = false;

  showSubUserAdmin = false; 

  showCreateSubUser = false;

  showMrmUserAdmin = false;

  showOmsUsers = false;

  showCreateOmsUser = false;

  showCreateMrmUser = false;

  showEditUserPopup = false;

  selectedEditUser: any = null;

  showNewOutletPortal = false;

  showNewOutletApplicationForm = false;

  // TAB CLICK
  onTabChanged(tabId: string) {

  console.log(
    'Selected Tab:',
    tabId
  );

  // RESET ALL MAIN SCREENS
  this.showSidebar = false;

  this.showTermsConditions = false;

  this.showChangePassword = false;

  this.showCustomizedReport = false;

  this.showSettlementSubmission = false;

  this.showSubUserAdmin = false;

  this.showCreateSubUser  = false;

  this.showMrmUserAdmin = false;

  this.showOmsUsers = false;

  this.showCreateOmsUser = false;

  this.showCreateMrmUser = false;

  this.showNewOutletPortal = false;

  this.showNewOutletApplicationForm = false;

  // RESET INNER VAT SCREENS
  this.showTaxInvoiceDelivery = false;

  this.showUploadCertificate = false;

  this.showTaxInvoiceReport = false;

  // RESET SIDEBAR MENU
  this.selectedSidebarMenu = '';

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

  // CUSTOMIZED REPORT
  if (tabId === 'customizedreports') {

    this.showCustomizedReport = true;
  }

  // SETTLEMENT & SUBMISSION
  if (tabId === 'settlement') {

    this.showSettlementSubmission = true;
  }

  // SUB USER ADMINISTRATION
  if (tabId === 'subuseradministration') {
    this.showSubUserAdmin = true;
  }

  // MRM USER ADMINISTRATION
  if (tabId === 'mrmusers') {
    this.showMrmUserAdmin = true;
  }

  // OMS USERS
  if (tabId === 'omsusers') {
    this.showOmsUsers = true;
  }


  // ADD NEW OUTLET
  if (tabId === 'addnewoutlet') {
    this.showNewOutletPortal = true;
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

  onCreateOmsUser() {

  this.showOmsUsers = false;

  this.showCreateOmsUser = true;
}

onBackToOmsUsers() {

  this.showCreateOmsUser = false;

  this.showOmsUsers = true;
}

onCreateMrmUser() {

  this.showMrmUserAdmin = false;

  this.showCreateMrmUser = true;
}

onBackToMrmUsers() {

  this.showCreateMrmUser = false;

  this.showMrmUserAdmin = true;
}

omsUserRows = [

  {
    userId: 'omsadmin1',

    userName: 'Ahmed',

    merchantNumber: '9275640241',

    emailAddress:
      'ahmed@merchant.ae',

    creationDate: '09/09/2021',

    status: 'Active'
  },

  {
    userId: 'omsadmin2',

    userName: 'Sara',

    merchantNumber: '9275640242',

    emailAddress:
      'sara@merchant.ae',

    creationDate: '05/05/2024',

    status: 'Active'
  },

  {
    userId: 'omsadmin3',

    userName: 'Omar',

    merchantNumber: '9275640243',

    emailAddress:
      'omar@merchant.ae',

    creationDate: '08/09/2021',

    status: 'Inactive'
  }

];

onEditMrmUser(user: any) {

  console.log(
    'Selected User:',
    user
  );

  this.selectedEditUser = user;

  this.editPopupTitle =
    'EDIT MRM USER';

  this.showEditUserPopup = true;
}

closeEditPopup() {

  this.showEditUserPopup = false;
}

onEditOmsUser(user: any) {

  console.log(
    'OMS User:',
    user
  );

  this.selectedEditUser = user;

  this.editPopupTitle =
    'EDIT OMS USER';

  this.showEditUserPopup = true;
}

onCreateSubUser() {

  this.showSubUserAdmin = false;

  this.showCreateSubUser = true;
}

onEditSubUser(user: any) {

  this.selectedEditUser = user;

  this.editPopupTitle =
    'EDIT SUB USER';

  this.showEditUserPopup = true;
}

onCreateNewApplication() {

  this.showNewOutletPortal = false;

  this.showNewOutletApplicationForm = true;
}
}