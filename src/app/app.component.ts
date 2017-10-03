
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './../pages/home/home';
import { AcercaPage } from './../pages/acerca/acerca';
import { ContactoPage } from '../pages/contacto/contacto';
import { PerfilesPage } from '../pages/perfiles/perfiles';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  // rootPage: any = HomePage;
  public pages: Array<{ titulo: string, component: any, icon: string }>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.rootPage = HomePage;
    this.pages = [

      { titulo: 'Inicio', component: HomePage, icon: 'home' },
      { titulo: 'Perfil Rjsoft', component: PerfilesPage, icon: 'person' },
      { titulo: 'Contactos', component: ContactoPage, icon: 'mail' },
      { titulo: 'Acerca de', component: AcercaPage, icon: 'information-circle' },
    ];
  }

  getPages(page) {
    this.nav.setRoot(page);
  }
}

