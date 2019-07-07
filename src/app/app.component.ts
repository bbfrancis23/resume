import { Component, OnDestroy } from '@angular/core'
import { OverlayContainer } from '@angular/cdk/overlay'

import { Subscription } from 'rxjs'

import { AppConfigService, AppConfig } from './app-config/app-config.service'
import { Menu } from './menu/menu'

@Component({ selector: 'app-root', templateUrl: 'app.component.html', styleUrls: ['app.component.scss'] })
export class AppComponent implements OnDestroy {

  private appConfig$: AppConfig
  menu: Menu
  subs: Subscription[] = []

  lastTheme: string = null


  constructor(
    private appConfigService: AppConfigService,
    private overlayContainer: OverlayContainer) {


    try {
      this.initStyleTheme()

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

  initStyleTheme() {
    this.appConfigService.getAppConfig().subscribe(c => {
      this.appConfig$ = c
      console.log(c)
      if (this.lastTheme) {
        this.overlayContainer.getContainerElement().classList.remove(this.lastTheme);
        document.body.classList.remove(this.lastTheme);
      }

      this.lastTheme = this.appConfig$.theme

      this.overlayContainer.getContainerElement().classList.add(this.appConfig$.theme);
      document.body.classList.add(this.appConfig$.theme)
    })

  }


  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()) }
}
