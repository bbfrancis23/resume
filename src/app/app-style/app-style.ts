import { Input } from '@angular/core'
import { Menu, MenuItem } from '../menu/menu'

import { MatDialog } from '@angular/material'
import { DialogPosition } from '@angular/material'

import { AppConfigDialogComponent } from '../app-config/app-config-dialog/app-config-dialog.component'

export abstract class AppStyle {
  @Input() menu: Menu

  constructor(public dialog: MatDialog) { }

  managerClick(m: MenuItem) {

    if (m.dialog) {
      if (m.id === 'AppManager') {
        let position: DialogPosition = { top: '20px', right: '25px' }
        this.dialog.open(AppConfigDialogComponent, { 'position': position, hasBackdrop: false })

      }
    }
  }
}
