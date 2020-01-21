import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, AboutUsComponent } from './component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoTopButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
