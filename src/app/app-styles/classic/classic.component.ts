import { Component } from '@angular/core';
import { MatDialog } from '@angular/material'
import { AppStyle } from '../app-style'

@Component({
  selector: 'app-classic',
  templateUrl: 'classic.component.html',
  styleUrls: ['classic.component.scss']
})
export class ClassicAppComponent extends AppStyle {
  constructor(public dialog: MatDialog) { super(dialog) }
}
