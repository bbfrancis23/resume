import { Component } from '@angular/core'
import { MatDialog } from '@angular/material'
import { MatDialogRef, DialogPosition } from '@angular/material'

import { AppStyle } from '../app-style'
import { AppConfigDialogComponent } from '../../app-config/app-config-dialog/app-config-dialog.component'


@Component({ selector: 'app-aqua', templateUrl: './aqua.component.html', styleUrls: ['./aqua.component.scss'] })
export class AquaComponent extends AppStyle {

  constructor() { super() }

}
