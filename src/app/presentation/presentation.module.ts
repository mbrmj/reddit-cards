import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { NavArrowComponent } from './components/nav-arrow/nav-arrow.component';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { TiltePanelComponent } from './components/tilte-panel/tilte-panel.component';
import { MainPresentationComponent } from './containers/main-presentation/main.presentation.component';
import { WrapBoxComponent } from './components/wrap-box/wrap-box.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule 
  ],
  declarations: [
    NavArrowComponent,
    NavPanelComponent,
    TiltePanelComponent,
    MainPresentationComponent,
    WrapBoxComponent
  ],
  exports: [
    MainPresentationComponent
  ]
})
export class PresentationModule { }
