import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StyleClassModule} from 'primeng/styleclass';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    MenuBarComponent, 
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
