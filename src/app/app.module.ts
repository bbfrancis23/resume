import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigComponent } from './app-config/app-config.component';
import { ClassicComponent } from './app-style/classic/classic.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppConfigDialogComponent } from './app-config/app-config-dialog/app-config-dialog.component';
import { AquaComponent } from './app-style/aqua/aqua.component';

@NgModule({
  declarations: [
    AppComponent,
    AppConfigComponent,
    ClassicComponent,
    AppConfigDialogComponent,
    AquaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppConfigDialogComponent],
})
export class AppModule { }
