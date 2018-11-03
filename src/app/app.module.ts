import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiserviceProvider } from '../providers/apiservice/apiservice';
import { HttpClientModule  } from "@angular/common/http";
import { HelperProvider } from '../providers/helper/helper';
import { ArticlePage } from '../pages/article/article';
import { ChannelPage } from '../pages/channel/channel';
import { ChanneldataPage } from '../pages/channeldata/channeldata';
import { FirestoreProvider } from '../providers/firestore/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environment';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ArticlePage,
    ChannelPage,
    ChanneldataPage,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ArticlePage,
    ChannelPage,
    ChanneldataPage
  ],
  providers: [
    ApiserviceProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HelperProvider,
    FirestoreProvider
  ]
})
export class AppModule {}
