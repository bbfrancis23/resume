import { Input } from '@angular/core'
import { Menu } from '../menu/menu'

export abstract class AppStyle {
  @Input() menu: Menu

  constructor() {

  }
}
