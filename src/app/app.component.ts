import { Component, OnDestroy } from '@angular/core'
import { AppConfigService, AppConfig } from './app-config/app-config.service'
import { Menu, MenuItem } from './menu/menu'

import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  private appConfig$: AppConfig
  subs: Subscription[] = []

  menu: Menu


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

    this.menu = {
      home: { title: 'BF', tooltip: 'Brian Francis', icon: 'home' },
      pageLinks: [
        { title: 'About', tooltip: 'About Brian Francis', icon: 'info' },
        { title: 'Experience', tooltip: 'Work Experience', icon: 'business_center' },
        { title: 'Skills', tooltip: 'Skills', icon: 'build' },
        { title: 'PortFolio', tooltip: 'PortFolio', icon: 'photo_library' },
        { title: 'Testimonials', tooltip: 'Testimonials', icon: 'star' }
      ],
      managers: [
        { title: 'App Manager', tooltip: 'Application Manager', icon: 'settings_applications', dialog: true }
      ]
    }
  }



  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()) }
}
