import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  template: `
<pre>
<code [class]="language"><ng-content></ng-content></code>
</pre>
  `,
})
export class CodeBlockComponent {
  @Input() language: string;
}
