import { Component, OnInit, Inject } from '@angular/core';
import { Platform, MenuController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';

import { VtPopupPage } from './vt-popup/vt-popup.page';
import { BuyappalertPage } from './buyappalert/buyappalert.page';

import { Constants } from 'src/models/contants.models';
import { NavController } from '@ionic/angular';
import { MyEventsService } from './services/events/my-events.service';
import { APP_CONFIG, AppConfig } from './app.config';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  private pages: Array<{ title: string, component: any }>;
  public selectedIndex = 0;
  enableSideMenu = false;
  [x: string]: any;
  activePage = 1;
  public ShophourMenu = [
    {
      title: 'home',
      url: '/shophour-home',
      icon: 'zmdi zmdi-home'
    },
    {
      title: 'my_profile',
      url: '/shophour-home',
      icon: 'zmdi zmdi-assignment-account'
    },
    {
      title: 'my_orders',
      url: '/shophour-my-orders',
      icon: 'zmdi zmdi-shopping-cart'
    },
    {
      title: 'offers',
      url: '/shophour-offers',
      icon: 'zmdi zmdi-label'
    },
    {
      title: 'my_wishlist',
      url: '/shophour-home',
      icon: 'zmdi zmdi-favorite'
    },

    {
      title: 'about_us',
      url: '/shophour-home',
      icon: 'zmdi zmdi-assignment'
    },

    {
      title: 'help_center',
      url: '/shophour-home',
      icon: 'zmdi zmdi-comment-text'
    },
    {
      title: 'languges',
      url: '/shophour-home',
      icon: 'zmdi zmdi-globe'
    },
    {
      title: 'logout',
      url: '/shophour-sign-in',
      icon: 'zmdi zmdi-open-in-new'
    },

  ];

  constructor(@Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private menu: MenuController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalController: ModalController,
    private translate: TranslateService,
    private route: Router,
    private navCtrl: NavController, private myEvent: MyEventsService
  ) {
    this.myEvent.getMenuIdObservable().subscribe(mId => { this.menu.enable(true, mId); if (mId != "zero") this.menu.open(mId) });
    this.initializeApp();
    this.translate.setDefaultLang('en');
  }

  initializeApp() {
    if (this.config.demoMode && this.platform.is('cordova') && !window.localStorage.getItem(Constants.KEY_IS_DEMO_MODE)) {
      window.localStorage.setItem(Constants.KEY_IS_DEMO_MODE, "true");
      // this.language();
      setTimeout(() => this.presentModal(), 30000);
    } else {
      this.navCtrl.navigateRoot(['./']);
    }
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#000000');
      // let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      // this.globalize(defaultLang);
      setTimeout(() => this.splashScreen.hide(), 3000);
      this.route.events.subscribe(value => {
        if (value instanceof NavigationStart) {
          this.enableSideMenu = value.url == "/gropot-categories" || value.url == "/gropot-home" || value.url == "/gropot-favorite" || value.url == "/gropot-my-orders" || value.url == "/gropot-support";
        }
      });
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  home() {
    this.navCtrl.navigateRoot(['./home']);
  }
  openSkype() {
    window.open("skype:opuslabsin?chat", "_system");
  }

  openMail() {
    window.open("mailto:hello@opuslab.works", "_system");
  }

  openWeb() {
    window.open("https://codecanyon.net/user/opuslabworks/portfolio", "_system");
  }

  openInsta() {
    window.open("https://www.instagram.com/opuslabworks", "_system");
  }

  openYoutube() {
    window.open("https://www.youtube.com/c/OpusLabWorks", "_system");
  }

  openFacebook() {
    window.open("https://www.facebook.com/opuslabworks", "_system");
  }

  // buyAppAction() {
  //   window.open(this.config.buyNowLink, '_system', 'location=no');
  // }



  async presentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }

  async buyAppAction() {
    const modal = await this.modalController.create({
      component: BuyappalertPage,
    });
    return await modal.present();
  }


  gropotHome() {
    this.navCtrl.navigateRoot(['./gropot-home']);
    this.activePage = 1;
  }
  gropotCategories() {
    this.navCtrl.navigateRoot(['./gropot-categories']);
    this.activePage = 2;
  }
  gropotFavorite() {
    this.navCtrl.navigateRoot(['./gropot-favorite']);
    this.activePage = 3;
  }
  gropotMyOrders() {
    this.navCtrl.navigateRoot(['./gropot-my-orders']);
    this.activePage = 4;
  }
  gropotSupport() {
    this.navCtrl.navigateRoot(['./gropot-support']);
    this.activePage = 5;
  }
  gropotAccount() {
    this.route.navigate(['./gropot-account']);
  }

}
