import { Component, VERSION as av } from '@angular/core';
import { VERSION as mv } from '@angular/material/core';

@Component({
  selector: 'app-version-dialog',
  template: `
    <h2>Built using</h2>
    <ul>
      <li><a href="https://angular.io" target="_blank">Angular {{ angularVersion }}</a></li>
      <li><a href="https://material.angular.io" target="_blank">Angular Material {{ materialVersion }}</a></li>
    </ul>
  `,
})
export class VersionDialogComponent {
  angularVersion = av.full;
  materialVersion = mv.full;
}
