import {
  Component,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  AmexContactInformationFormComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-contact-information',
  standalone: true,
  imports: [
    CommonModule,
    AmexContactInformationFormComponent
  ],
  templateUrl:
    './oms-contact-information.component.html',
})
export class OmsContactInformationComponent {

  @Input()
  sectionTitle = 'CONTACT INFORMATION';
}