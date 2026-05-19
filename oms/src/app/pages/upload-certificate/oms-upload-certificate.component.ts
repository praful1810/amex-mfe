import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  AmexUploadCertificatePanelComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-upload-certificate',
  standalone: true,
  imports: [
    CommonModule,
    AmexUploadCertificatePanelComponent
  ],
  templateUrl:
    './oms-upload-certificate.component.html',
})
export class OmsUploadCertificateComponent {

  @Input()
  hintText =
    'Please upload only .pdf or .jpg files';

  @Input()
  status:
    'idle' | 'success' | 'error' = 'idle';

   @Output()
   uploadCertificateClicked = new EventEmitter<void>();

   @Output()
   backClicked = new EventEmitter<void>();

   onUploadCertificate() {

    console.log(
        'Upload Certificate Clicked'
    );

    this.uploadCertificateClicked.emit();
    }

    handleClick(event: any) {

    const text =
        event.target?.innerText?.trim();

    console.log('Clicked:', text);

    if (
        text?.toLowerCase()
        .includes('back')
    ) {

        this.backClicked.emit();
    }
    }
}