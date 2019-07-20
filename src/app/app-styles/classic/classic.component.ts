import { Component } from '@angular/core';
import { MatDialog } from '@angular/material'

import { AppConfigService } from '../../app-config/app-config.service'
import { AppStyle } from '../app-style'

@Component({
  selector: 'app-classic',
  templateUrl: 'classic.component.html',
  styleUrls: ['classic.component.scss']
})
export class ClassicAppComponent extends AppStyle {


  constructor(
    dialog: MatDialog,
    appConfigService: AppConfigService
  ) {
    super(appConfigService, dialog)
  }
}
