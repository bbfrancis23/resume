import { Component } from '@angular/core'
import { MatDialog } from '@angular/material'
import { AppStyle } from '../app-style'

@Component({ selector: 'app-aqua', templateUrl: './aqua.component.html', styleUrls: ['./aqua.component.scss'] })
export class AquaComponent extends AppStyle {
  sideNavOpened = true
  constructor(public dialog: MatDialog) { super(dialog) }
}
