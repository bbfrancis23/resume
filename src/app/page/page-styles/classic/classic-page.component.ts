import { Component } from '@angular/core';
import { PageStyle } from '../page-style'

import { AppConfigService, AppConfig, Theme, THEME_EXTENSION } from '../../../app-config/app-config.service'

appConfig$: AppConfig

@Component({
  selector: 'classic-page',
  templateUrl: 'classic-page.component.html',
  //styleUrls: ['classic.component.scss']
})
export class ClassicPageComponent extends PageStyle {

  appConfig$: AppConfig

  constructor(
    private appConfigService: AppConfigService,
  ) {
    super()

    try {
      this.appConfigService.getAppConfig$().subscribe(c => {

        this.appConfig$ = c


      })
    } catch (err) {
      console.error(err)
    }
  }
}
