import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  NxWelcome
} from './nx-welcome';

import {
  OmsPageShellComponent
} from './pages/oms-page-shell.component';

@Component({

  selector:
    'app-root',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule,
    NxWelcome,
    OmsPageShellComponent
  ],

  templateUrl:
    './app.html',

  styleUrl:
    './app.css',
})
export class App {

  protected title =
    'shell';
}