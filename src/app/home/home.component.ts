import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  exampleCode = `
    <mat-toolbar color="primary">
      <!-- We can have multiple rows in a toolbar.
      In this example, we only have one row, which is not necessary to put a row here, but I still do it anyway for demonstration -->
      <!-- The mat-toolbar-row is a flexbox.  -->
      <mat-toolbar-row>
          <!-- To allow an icon to be clickable,
          embrace the icon with a button element and set the button to be mat-icon-button -->
          <button mat-icon-button (click)="sidenav.toggle()">
              <!-- The innerHTML of mat-icon denotes the icon. It can be referenced from https://material.io/resources/icons/?style=baseline -->
              <mat-icon>menu</mat-icon>
          </button>
          <!-- Angular Material Guide uses span for each elements in the toolbar.
              I don't know why, but I just followed it anyway.  -->
          <span routerLink="" style="cursor:pointer;">Angular material Application</span>
          <span class="toolbar-place-holder"></span>
          <button mat-icon-button (click)="openVersionDialog()">
              <mat-icon>info</mat-icon>
          </button>
      </mat-toolbar-row>
  </mat-toolbar>`;
}
