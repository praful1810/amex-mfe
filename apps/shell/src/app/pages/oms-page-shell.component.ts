import {
  Component,
  Input
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterOutlet
} from '@angular/router';

import {
  AmexNavPortalStyle,
  AmexPageShellComponent
} from '@vn-core-ui-components/ui';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector:'oms-page-shell',

  standalone: true,

  imports: [
    CommonModule,
    RouterOutlet,
    AmexPageShellComponent
  ],

  templateUrl:
    './oms-page-shell.component.html',

  styles: [`

    :host {

      width: 100%;

      display: block;

      height: 100%;
    }

    .page-content {

      padding: 20px;

      font-family: Arial, sans-serif;

      height: calc(100vh - 120px);

      overflow: auto;
    }

  `]
})
export class OmsPageShellComponent {

  @Input()
  portalStyle:
    AmexNavPortalStyle = 'oms';

  @Input()
  pageTitle =
    'OMS Portal';

  @Input()
  pageSubtitle =
    'Manage merchants, settlements, reports and users';

  @Input()
  showSidebar = true;

  @Input()
  showHeader = true;

  @Input()
  showFooter = true;

  @Input()
  config = {

    header: {

      visible: true
    },

    footer: {

      visible: true,

      text:
        '© 2026 American Express OMS Portal'
    }
  };
}