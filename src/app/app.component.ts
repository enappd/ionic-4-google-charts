import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Bar Charts',
      url: '/bar',
      icon: 'stats'
    },
    {
      title: 'Pie Charts',
      url: '/pie',
      icon: 'pie'
    },
    {
      title: 'Line Charts',
      url: '/line',
      icon: 'trending-up'
    },
    {
      title: 'Area Charts',
      url: '/area',
      icon: 'image'
    },
    {
      title: 'Scatter Charts',
      url: '/scatter',
      icon: 'keypad'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
