import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatRadioModule } from '@angular/material/radio'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppConfigComponent } from './app-config/app-config.component'
import { AppConfigDialogComponent } from './app-config/app-config-dialog/app-config-dialog.component'

import { ClassicAppComponent } from './app-styles/classic/classic.component'
import { AquaAppComponent } from './app-styles/aqua/aqua.component'

import { ClassicPageComponent } from './page/page-styles/classic/classic-page.component'

import { ResumeIntroComponent } from './page/page-items/resume-intro/resume-intro.component'

@NgModule({
  declarations: [
    AppComponent, AppConfigComponent, AppConfigDialogComponent,
    AquaAppComponent, ClassicAppComponent,
    ClassicPageComponent,
    ResumeIntroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppConfigDialogComponent],
})
export class AppModule { }
