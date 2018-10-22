import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { componentFactoryName } from '@angular/compiler';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  communicatePages: Array<{ title: string, component: any }>

  settingPages : Array<{title: string, component: any}>


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Managed Sources', component: "Managed Sources" },
      { title: 'Saved', component: "Saved" }
    ];

    this.settingPages = [
      { title: 'Font size', component: "Font size" },
      { title: 'Day/Night Mode', component: "Day/Night Mode" },
      { title: 'Video', component: "Video" },
      { title: 'Notifications', component: "Notifications" },
      { title: 'Language', component: "Language" }
    ]

    this.communicatePages = [
      { title: 'Share', component: "Share" },
      { title: 'Send Feedback', component: "Send Feedback" },
      { title: 'About', component: "About" },
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
