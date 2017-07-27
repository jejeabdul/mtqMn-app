import { EditHaditsPage } from './../pages/daftar-hadits/edit-hadits/edit-hadits';
import { AddHaditsPage } from './../pages/daftar-hadits/add-hadits/add-hadits';
import { EditSuratPage } from './../pages/daftar-surat/edit-surat/edit-surat';
import { AddSuratPage } from './../pages/daftar-surat/add-surat/add-surat';
import { SDKBrowserModule } from './../shared/sdk/index';
import { TanyaQuPage } from './../pages/tanya-qu/tanya-qu';
import { DaftarHaditsPage } from './../pages/daftar-hadits/daftar-hadits';
import { DaftarSuratPage } from './../pages/daftar-surat/daftar-surat';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DaftarSuratPage,
    DaftarHaditsPage,
    TanyaQuPage,
    AddSuratPage,
    EditSuratPage,
    AddHaditsPage,
    EditHaditsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SDKBrowserModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DaftarSuratPage,
    DaftarHaditsPage,
    TanyaQuPage,
    AddSuratPage,
    EditSuratPage,
    AddHaditsPage,
    EditHaditsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
