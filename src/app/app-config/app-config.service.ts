import { Injectable, OnDestroy } from '@angular/core'
import { BehaviorSubject, Observable, Subscription } from 'rxjs'

export interface AppConfig {
  style?: 'Classic' | 'Aqua'
  //TODO: solve quandy of theme on every name
  theme?:
  'arizona-theme' | 'beach-theme' | 'corp-theme' | 'lush-theme' |
  'midnight-theme' | 'pirate-theme' | 'tech-theme' | 'tropial-theme' | string
}

export interface Theme {
  name: string
  primary: string
  accent: string
  icon: string
}

export class AppConfig implements AppConfig {

  constructor(appConfig?: AppConfig) {
    if (appConfig) {
      this.style = appConfig.style || 'Aqua'
      this.theme = appConfig.theme || 'beach-theme'
    } else {
      this.style = "Aqua"
      this.theme = "beach-theme"
    }
    return this
  }
}

@Injectable({ providedIn: 'root' })
export class AppConfigService implements OnDestroy {

  private readonly appConfig: BehaviorSubject<AppConfig>
  private readonly currentAppConfig: Observable<AppConfig>
  public setAppConfig(appConfig: AppConfig): void { this.appConfig.next(appConfig) }
  public getAppConfig(): Observable<AppConfig> { return this.currentAppConfig }

  readonly themes: Theme[] = [
    { name: 'arizona', primary: '#8D6E63', accent: '#FF7043', icon: 'wb_sunny' },
    { name: 'beach', primary: '#009688', accent: '#BCAAA4', icon: 'beach_access' },
    { name: 'corp', primary: '#607D8B', accent: '#9E9E9E', icon: 'domain' },
    { name: 'lush', primary: '#2E7D32', accent: '#AED581', icon: 'spa' },
    { name: 'midnight', primary: '#512DA8', accent: '#3F51B5', icon: 'brightness_2' },
    { name: 'pirate', primary: '#212121', accent: '#B71C1C', icon: 'sentiment_very_dissatisfied' },
    { name: 'tech', primary: '#263238', accent: '#1DE9B6', icon: 'computer' },
    { name: 'tropical', primary: '#3F51B5', accent: '#03A9F4', icon: 'brightness_low' },
  ]

  styles: any = [
    { id: 'Classic', name: 'Classic', tooltip: 'Classic Top Navigation' },
    { id: 'Aqua', name: 'Aqua', tooltip: 'Sliding Side Navigation' }
  ]

  appConfig$: AppConfig
  subs: Subscription[] = []

  constructor() {
    try {
      this.appConfig = new BehaviorSubject<AppConfig>({})
      this.currentAppConfig = this.appConfig.asObservable()
      this.setAppConfig(new AppConfig())
      this.getAppConfig().subscribe(c => this.appConfig$ = c)
    } catch (err) {
      console.error(err)
    }
  }

  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()) }
}
