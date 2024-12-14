import { Component, Input } from '@angular/core';

export type MenuItem = {
    label: string;
    icon: string;
    route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css']
})
export class CustomSidenavComponent {

  sideNavCollapsed: boolean = false;
  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed = value;
  }

  menuItems: MenuItem[] = [
    { label: 'Devices', icon: 'devices', route: '/devices' },
    { label: 'Categories', icon: 'sort', route: '/categories' },
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Github Project', icon: 'code', route: '/github' }
  ];

  get profilePicSize(): string {
    return this.sideNavCollapsed ? '32' : '150';
  }

}
