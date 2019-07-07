import { Input } from '@angular/core'
import { Menu } from '../menu/menu'

export abstract class AppType {
  @Input() menu: Menu

  constructor() {

  }
}
