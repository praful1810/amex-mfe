import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AmexReportFormatFormComponent
} from '@vn-core/ui-components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'oms-report-format',
  standalone: true,
  imports: [
    CommonModule,
    AmexReportFormatFormComponent
  ],
  templateUrl:
    './oms-report-format.component.html',
})
export class OmsReportFormatComponent {}