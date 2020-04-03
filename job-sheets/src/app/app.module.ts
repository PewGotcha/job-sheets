import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import { AngularFireModule} from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth"
import{ AngularFirestoreModule} from "@angular/fire/firestore"
import { environment } from "../environments/environment"

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule, BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
