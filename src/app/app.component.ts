import { Component, OnDestroy } from '@angular/core'
import { AppConfigService, AppConfig } from './app-config/app-config.service'

import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  private appConfig$: AppConfig
  subs: Subscription[] = []


  constructor(private appConfigService: AppConfigService) {

    try {
      this.appConfigService.getAppConfig().subscribe(c => {
        console.log(c)
        this.appConfig$ = c
      })

      this.appConfigService.setAppConfig(new AppConfig({ type: 'Aqua' }))
    } catch (err) {
      console.error(err)
    }
  }



  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()) }
}
