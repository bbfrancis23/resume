import { Input } from '@angular/core'
import { Menu, MenuItem } from '../menu/menu'

import { MatDialog } from '@angular/material'
import { DialogPosition } from '@angular/material'

import { AppConfigDialogComponent } from '../app-config/app-config-dialog/app-config-dialog.component'
import { Unsubscriber } from '../unsubscriber/unsubscriber'

export abstract class AppStyle extends Unsubscriber {
  @Input() menu: Menu

  constructor(public dialog: MatDialog) { super() }

  managerClick(m: MenuItem) {

    if (m.dialog) {
      if (m.id === 'AppManager') {
        // TODO: find a place to store the top and right values
        let position: DialogPosition = { top: '20px', right: '25px' }
        this.dialog.open(AppConfigDialogComponent, { 'position': position, hasBackdrop: false })

      }
    }
  }
}
