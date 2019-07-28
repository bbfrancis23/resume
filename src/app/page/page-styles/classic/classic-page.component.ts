import { Component } from '@angular/core'
import { PageStyle } from '../page-style'

import { AppConfigService, AppConfig } from '../../../app-config/app-config.service'

@Component({
  selector: 'classic-page',
  templateUrl: 'classic-page.component.html',
})
export class ClassicPageComponent extends PageStyle {

  constructor(private appConfigService: AppConfigService,) { super()}
}
