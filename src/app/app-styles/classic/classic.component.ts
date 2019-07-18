import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material'
import { AppStyle } from '../app-style'

@Component({
  selector: 'app-classic',
  templateUrl: 'classic.component.html',
  styleUrls: ['classic.component.scss']
})
export class ClassicAppComponent extends AppStyle {
  breakPoints = Breakpoints

  constructor(
    public dialog: MatDialog,
    public breakpointObserver: BreakpointObserver
  ) {
    super(dialog)
    console.log(Breakpoints)
  }
}
