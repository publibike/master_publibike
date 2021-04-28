import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { RecognitionModalPageModule } from './recognition-modal/recognition-modal.module';
import { MapModalPageModule } from './map-modal/map-modal.module';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { BackgroundMode } from '@ionic-native/background-mode/ngx'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RecognitionModalPageModule,
    MapModalPageModule,
    IonicStorageModule.forRoot()],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    BackgroundMode,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
