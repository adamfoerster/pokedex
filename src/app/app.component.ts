import { Component } from '@angular/core';

@Component({
  selector: 'pkd-root',
  template: `
    <pkd-navigation>
      <router-outlet></router-outlet>
    </pkd-navigation>
  `
})
export class AppComponent {}
