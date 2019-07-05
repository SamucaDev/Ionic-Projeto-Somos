import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { Base64 } from '@ionic-native/base64/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      HttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Base64,
    ImagePicker
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
