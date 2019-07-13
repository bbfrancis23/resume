import { Component } from '@angular/core'
import { AppConfigService, AppConfig, Style, Theme } from '../app-config.service'
import { Unsubscriber } from '../../unsubscriber/unsubscriber'

@Component({
  selector: 'app-config-dialog',
  templateUrl: 'app-config-dialog.component.html',
  styleUrls: ['app-config-dialog.component.scss']
})
export class AppConfigDialogComponent extends Unsubscriber {

  appConfig$: AppConfig

  constructor(private appConfigService: AppConfigService) {
    super()
    try {
      this.subs.push(this.appConfigService.getAppConfig().subscribe(c => this.appConfig$ = c))
    } catch (err) {
      console.error(err)
    }
  }

  updateTheme(theme: Theme) {
    const appConfig: AppConfig = { theme: theme, style: this.appConfig$.style }
    this.appConfigService.setAppConfig(appConfig)
  }

  updateStyle(style: Style) {
    const appConfig: AppConfig = { theme: this.appConfig$.theme, style: style }
    this.appConfigService.setAppConfig(appConfig)
  }

}
