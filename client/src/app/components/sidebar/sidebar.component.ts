import { Component, Input } from '@angular/core';

import {
  AUTH,
  STORE
} from '../../../constants/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  AUTH = AUTH;
  STORE = STORE;
}
