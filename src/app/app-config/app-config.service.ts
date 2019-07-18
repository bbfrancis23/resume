import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { OverlayContainer } from '@angular/cdk/overlay'

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

    this.theme = (appConfig && appConfig.theme) || THEMES[2]
    this.style = (appConfig && appConfig.style) || STYLES[0]
    return this
  }
}

@Injectable({ providedIn: 'root' })
export class AppConfigService extends Unsubscriber {


  private readonly _appConfig$: BehaviorSubject<AppConfig> = new BehaviorSubject<AppConfig>(new AppConfig())
  public setAppConfig$(appConfig: AppConfig): void { this._appConfig$.next(appConfig) }
  public getAppConfig$(): Observable<AppConfig> { return this._appConfig$.asObservable() }
  _appConfig: AppConfig
  get appConfig(): AppConfig { return this._appConfig }
  set appConfig(ac: AppConfig) { this.setAppConfig$(ac) }

  lastTheme: Theme

  xsmallScreen: boolean

  constructor(
    private overlayContainer: OverlayContainer,
    public breakpoint: BreakpointObserver
  ) {
    super()

    this.subs.push(this.getAppConfig$().subscribe(ac => {
      this._appConfig = ac
      if (this.lastTheme) this.removeLastThemeHTML()
      this.lastTheme = this.appConfig.theme
      this.addThemeHTML()
    }))

    this.subs.push(this.breakpoint.observe(Breakpoints.XSmall).subscribe(result => this.xsmallScreen = result.matches))
  }

  getThemes() { return THEMES }

  getStyles() { return STYLES }

  removeLastThemeHTML() {
    const theme = `${this.lastTheme.title}-${THEME_EXTENSION}`
    this.overlayContainer.getContainerElement().classList.remove(theme);
    document.body.classList.remove(theme);
  }

  addThemeHTML() {
    const theme = `${this.appConfig.theme.title}-${THEME_EXTENSION}`
    this.overlayContainer.getContainerElement().classList.add(theme);
    document.body.classList.add(theme)
  }

  updateTheme(theme: Theme) { this.setAppConfig$({ theme: theme, style: this.appConfig.style }) }

  updateStyle(style: Style) { this.setAppConfig$({ theme: this.appConfig.theme, style: style }) }

}
