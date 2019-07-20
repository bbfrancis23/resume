import { Component } from '@angular/core'
import { MatDialog } from '@angular/material'
import { AppStyle } from '../app-style'

import { AppConfigService, AppConfig, Theme, THEME_EXTENSION } from '../../app-config/app-config.service'

@Component({
  selector: 'app-aqua',
  templateUrl: 'aqua.component.html',
  styleUrls: ['aqua.component.scss']
})
export class AquaAppComponent extends AppStyle {
  sideNavOpened = false

  appConfig$: AppConfig


  constructor(
    dialog: MatDialog,
    appConfigService: AppConfigService, ) {
    super(appConfigService, dialog)
    appConfigService.menuHeight = '0px'
    try {
      this.appConfigService.getAppConfig$().subscribe(c => {

        this.appConfig$ = c


      })
    } catch (err) {
      console.error(err)
    }
  }
}
