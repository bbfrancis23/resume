import { Component, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppConfigService, AppConfig } from '../app-config.service'

@Component({ selector: 'app-config-dialog', templateUrl: 'app-config-dialog.component.html', styleUrls: ['app-config-dialog.component.scss'] })
export class AppConfigDialogComponent implements OnDestroy {

  appConfig$: AppConfig
  subs: Subscription[] = []

  constructor(private appConfigService: AppConfigService) {
    try {
      this.subs.push(this.appConfigService.getAppConfig().subscribe(c => this.appConfig$ = c))
      console.log(this.appConfig$)
    } catch (err) {
      console.error(err)
    }
  }

  updateTheme(name: string) {

    const appConfig: AppConfig = { theme: `${name}-theme`, style: this.appConfig$.style }
    this.appConfigService.setAppConfig(appConfig)
  }

  updateStyle(style) {
    const appConfig: AppConfig = { theme: this.appConfig$.theme, style: style.name }
    this.appConfigService.setAppConfig(appConfig)
  }

  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()) }
}
