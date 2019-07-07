import { Component, OnDestroy, OnInit } from '@angular/core';

import { AppConfigService, AppConfig } from '../app-config.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-config-dialog',
  templateUrl: './app-config-dialog.component.html',
  styleUrls: ['./app-config-dialog.component.scss']
})
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

  updateTheme(name) {
    const appConfig: AppConfig = { theme: `${name}-theme`, style: 'Classic' }
    this.appConfigService.setAppConfig(appConfig)
  }

  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()) }
}
