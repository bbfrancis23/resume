import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { OverlayContainer } from '@angular/cdk/overlay'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { UnSubscriber } from '../unsubscriber/unsubscriber'
import { HttpClient } from '@angular/common/http'

export const THEME_EXTENSION: string = 'theme'

export interface Theme {
  title: string
  primary: string
  accent: string
}

export interface Style {
  title: string
  description: string
}

export interface AppConfig {
  theme: Theme
  style: Style
}

const THEMES: Theme[] = [
  { title: 'arizona', primary: '#8D6E63', accent: '#FF7043' },
]

const STYLES: Style[] = [
  { title: 'Classic', description: 'Classic Top Menu Navigation' },
  { title: 'Aqua', description: 'Side-Bar Navigation' }
]

export class AppConfig implements AppConfig {

  constructor(appConfig?: AppConfig) {

    this.theme = (appConfig && appConfig.theme) || THEMES[0]
    this.style = (appConfig && appConfig.style) || STYLES[0]
    return this
  }
}

@Injectable({ providedIn: 'root' })
export class AppConfigService extends UnSubscriber {

  private _themes: Theme[]

  private readonly _appConfig$: BehaviorSubject<AppConfig> = new BehaviorSubject<AppConfig>(new AppConfig())
  public setAppConfig$(appConfig: AppConfig): void { this._appConfig$.next(appConfig) }
  public getAppConfig$(): Observable<AppConfig> { return this._appConfig$.asObservable() }
  _appConfig: AppConfig
  get appConfig(): AppConfig { return this._appConfig }
  set appConfig(ac: AppConfig) { this.setAppConfig$(ac) }

  Themes: Theme[]

  lastTheme: Theme

  xsmallScreen: boolean

  menuHeight: string = null

  constructor(
    private overlayContainer: OverlayContainer,
    public breakpoint: BreakpointObserver,
    public http: HttpClient
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

  get themes() {
    if (!this._themes) {
        this._themes = THEMES
        this.http.get<[Theme]>('api/themes')
          .toPromise()
          .then(res => this._themes = res)
          .catch(err => console.log(err)) // TODO: replace this with error handling and logging
      }
    return this._themes
  }



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
