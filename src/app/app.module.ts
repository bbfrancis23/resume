import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppConfigDialogComponent } from "./app-config/app-config-dialog/app-config-dialog.component";
import { AppConfigComponent } from "./app-config/app-config.component";
import { AppRoutingModule } from "./app-routing.module";
import { AquaAppComponent } from "./app-styles/aqua/aqua.component";
import { ClassicAppComponent } from "./app-styles/classic/classic.component";
import { AppComponent } from "./app.component";
import { ResumeIntroComponent } from "./page/page-items/resume-intro/resume-intro.component";
import { ClassicPageComponent } from "./page/page-styles/classic/classic-page.component";

@NgModule({
  declarations: [
    AppComponent,
    AppConfigComponent,
    AppConfigDialogComponent,
    AquaAppComponent,
    ClassicAppComponent,
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
  entryComponents: [AppConfigDialogComponent]
})
export class AppModule {}
