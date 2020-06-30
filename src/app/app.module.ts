import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavArrowComponent } from './nav-arrow/nav-arrow.component';
import { NacPanelComponent } from './nac-panel/nac-panel.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { TiltePanelComponent } from './tilte-panel/tilte-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavArrowComponent,
    NacPanelComponent,
    NavPanelComponent,
    TiltePanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
