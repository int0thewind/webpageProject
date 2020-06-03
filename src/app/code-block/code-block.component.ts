import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  template: `
<pre>
<code [class]="language"><ng-content></ng-content></code>
</pre>
  `,
  styles: [`pre > code { width: min(80vw, 1000px); margin: auto; }`]
})
export class CodeBlockComponent {
  @Input() language: string;
}
