import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Unsubscriber } from '../unsubscriber/unsubscriber'

export const THEME_EXTENSION: string = 'theme'

export interface Theme {
  title: 'arizona' | 'beach' | 'corp' | 'lush' | 'midnight' | 'pirate' | 'tech' | 'tropical'
  primary: string
  accent: string
}

export interface Style {
  title: 'Classic' | 'Aqua'
  description: string
}

export interface AppConfig {
  theme: Theme
  style: Style
}

const THEMES: Theme[] = [
  { title: 'arizona', primary: '#8D6E63', accent: '#FF7043' },
  { title: 'beach', primary: '#009688', accent: '#BCAAA4' },
  { title: 'corp', primary: '#607D8B', accent: '#9E9E9E' },
  { title: 'lush', primary: '#2E7D32', accent: '#AED581' },
  { title: 'midnight', primary: '#512DA8', accent: '#3F51B5' },
  { title: 'pirate', primary: '#212121', accent: '#B71C1C' },
  { title: 'tech', primary: '#263238', accent: '#1DE9B6' },
  { title: 'tropical', primary: '#3F51B5', accent: '#03A9F4' },
]

const STYLES: Style[] = [
  { title: 'Classic', description: 'Classic Top Menu Navigation' },
  { title: 'Aqua', description: 'Side-Bar Navigation' }
]

export class AppConfig implements AppConfig {

  constructor(appConfig?: AppConfig) {

    this.theme = (appConfig && appConfig.theme) || THEMES[6]
    this.style = (appConfig && appConfig.style) || STYLES[1]
    return this
  }
}

@Injectable({ providedIn: 'root' })
export class AppConfigService extends Unsubscriber {

  private readonly appConfig: BehaviorSubject<AppConfig>
  private readonly currentAppConfig: Observable<AppConfig>
  public setAppConfig(appConfig: AppConfig): void { this.appConfig.next(appConfig) }
  public getAppConfig(): Observable<AppConfig> { return this.currentAppConfig }

  appConfig$: AppConfig

  constructor() {
    super()
    try {
      let ac = new AppConfig()
      this.appConfig = new BehaviorSubject<AppConfig>(ac)
      this.currentAppConfig = this.appConfig.asObservable()
      this.setAppConfig(ac)
      this.getAppConfig().subscribe(c => this.appConfig$ = c)
    } catch (err) {
      console.error(err)
    }
  }

  getThemes() { return THEMES }

  getStyles() { return STYLES }

}
