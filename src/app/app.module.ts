import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PulsedbProvider } from '../providers/pulsedb/pulsedb';
import { SplashPage } from '../pages/splash/splash';
import { PulselistPage } from '../pages/pulselist/pulselist';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    PulselistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    PulselistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PulsedbProvider
  ]
})
export class AppModule {}
