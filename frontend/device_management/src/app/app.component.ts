import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collapsed = false;
  title = 'Device Management App';

  get sidenavWidth() {
    return this.collapsed ? '75px' : '250px';
  }
}

