import { Injectable, OnDestroy } from '@angular/core'
import { BehaviorSubject, Observable, Subscription } from 'rxjs'

export interface AppConfig {
  type?: "Classic" | "Aqua"
  theme?: "deeppurple-amber" | "indigo-pink.css" | "pink-bluegrey.css" | "purple-green.css"
}

export class AppConfig implements AppConfig {
  //type?: "Classic" | "Aqua"
  //theme?: "deeppurple-amber" | "indigo-pink.css" | "pink-bluegrey.css" | "purple-green.css"

  constructor(appConfig?: AppConfig) {
    if (appConfig) {
      this.type = appConfig.type || "Classic"
      this.theme = "deeppurple-amber"
    } else {
      this.type = "Classic"
      this.theme = "deeppurple-amber"
    }
    return this
  }
}


@Injectable({
  providedIn: 'root'
})
export class AppConfigService implements OnDestroy {

  private readonly appConfig: BehaviorSubject<AppConfig>
  private readonly currentAppConfig: Observable<AppConfig>
  public setAppConfig(appConfig: AppConfig): void { this.appConfig.next(appConfig) }
  public getAppConfig(): Observable<AppConfig> { return this.currentAppConfig }

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
