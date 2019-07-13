import { Component } from '@angular/core'
import { OverlayContainer } from '@angular/cdk/overlay'

import { Unsubscriber } from './unsubscriber/unsubscriber'

import { AppConfigService, AppConfig, Theme, THEME_EXTENSION } from './app-config/app-config.service'
import { Menu } from './menu/menu'

@Component({ selector: 'app-root', templateUrl: 'app.component.html', styleUrls: ['app.component.scss'] })
export class AppComponent extends Unsubscriber {

  appConfig$: AppConfig
  menu: Menu
  lastTheme: Theme

  constructor(
    private appConfigService: AppConfigService,
    private overlayContainer: OverlayContainer) {
    super()
    try { this.initStyleTheme() } catch (err) { console.error(err) }
    this.menu = {
      home: { title: 'BF', description: 'Brian Francis', icon: 'home' },
      pageLinks: [
        { title: 'About', description: 'About Brian Francis', icon: 'info' },
        { title: 'Experience', description: 'Work Experience', icon: 'business_center' },
        { title: 'Skills', description: 'Skills', icon: 'build' },
        { title: 'PortFolio', description: 'Projects', icon: 'photo_library' },
        { title: 'Testimonials', description: 'What people are saying about Brian', icon: 'star' }
      ],
      managers: [
        { id: 'AppManager', title: 'App Manager', description: 'Application Manager', icon: 'settings', dialog: true }
      ]
    }
  }

  initStyleTheme() {
    try {
      this.appConfigService.getAppConfig().subscribe(c => {

        this.appConfig$ = c
        if (this.lastTheme) this.removeLastThemeHTML()
        this.lastTheme = this.appConfig$.theme
        this.addThemeHTML()

      })
    } catch (err) {
      console.error(err)
    }
  }

  removeLastThemeHTML() {

    const theme = `${this.lastTheme.title}-${THEME_EXTENSION}`
    this.overlayContainer.getContainerElement().classList.remove(theme);
    document.body.classList.remove(theme);
  }

  addThemeHTML() {
    const theme = `${this.appConfig$.theme.title}-${THEME_EXTENSION}`
    this.overlayContainer.getContainerElement().classList.add(theme);
    document.body.classList.add(theme)
  }

}
