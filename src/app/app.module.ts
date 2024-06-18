import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],  // Declare the AppComponent
  imports: [
    BrowserModule,  // Import BrowserModule for running the app in a web browser
    IonicModule.forRoot(),  // Initialize Ionic with its default configurations
    AppRoutingModule,  // Import the AppRoutingModule for app routes
    HttpClientModule  // Import HttpClientModule to use HTTP services
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],  // Provide IonicRouteStrategy as the route reuse strategy
  bootstrap: [AppComponent],  // Bootstrap the application with AppComponent
})
export class AppModule {}
  