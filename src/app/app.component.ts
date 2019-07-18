import { Component } from '@angular/core'

import { AppConfigService } from './app-config/app-config.service'
import { Menu } from './menu/menu'

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {

  menu: Menu = {
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

  constructor(protected appConfigService: AppConfigService) { }
}
