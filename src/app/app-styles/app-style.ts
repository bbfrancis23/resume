import { Input } from '@angular/core'

import { MatDialog } from '@angular/material'
import { DialogPosition } from '@angular/material'

import { AppConfigDialogComponent } from '../app-config/app-config-dialog/app-config-dialog.component'
import { AppConfigService } from '../app-config/app-config.service'

import { Menu, MenuItem } from '../menu/menu'
import { Unsubscriber } from '../unsubscriber/unsubscriber'

export abstract class AppStyle extends Unsubscriber {
  @Input() menu: Menu

  constructor(
    private appConfigService: AppConfigService,
    private dialog: MatDialog

  ) { super() }

  managerClick(m: MenuItem) {

    if (m.dialog) {
      if (m.id === 'AppManager') {
        if (this.appConfigService.xsmallScreen) {
          this.dialog.open(AppConfigDialogComponent, { hasBackdrop: true })
        } else {
          let position: DialogPosition = { top: '20px', right: '50px' }
          this.dialog.open(AppConfigDialogComponent, { 'position': position, hasBackdrop: false })
        }
      }
    }
  }
}
