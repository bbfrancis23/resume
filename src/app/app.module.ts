import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatRadioModule } from '@angular/material/radio'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { AppConfigComponent } from './app-config/app-config.component'
import { AppConfigDialogComponent } from './app-config/app-config-dialog/app-config-dialog.component'

import { ClassicComponent } from './app-styles/classic/classic.component'
import { AquaComponent } from './app-styles/aqua/aqua.component'


@NgModule({
  declarations: [
    AppComponent, AppConfigComponent, AppConfigDialogComponent,
    AquaComponent, ClassicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatDialogModule, MatIconModule, MatRadioModule, MatSidenavModule, MatToolbarModule, MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppConfigDialogComponent],
})
export class AppModule { }
