import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VersionDialogComponent } from './version-dialog/version-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';

  constructor(public dialog: MatDialog) {}
  /*
  To open a dialog we have to create one instantly.
  First we must pass a material dialog into our class.
  Then, wen we need to open the dialog, call the open function,
    and pass the component we want to show in the dialog.
  We can also pass in some options for the dialog window.
  */
  openVersionDialog(): void {
    this.dialog.open(VersionDialogComponent, {
      hasBackdrop: true,
    });
  }
}
