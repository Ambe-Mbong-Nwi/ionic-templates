import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { APP_CONFIG, AppConfig } from '../app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-hungerz-my-account',
  templateUrl: './hungerz-my-account.page.html',
  styleUrls: ['./hungerz-my-account.page.scss'],
})
export class HungerzMyAccountPage implements OnInit {
  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router, private navCtrl: NavController, private modalController: ModalController, private http: HttpClient) { }

  ngOnInit() {
  }



  wallet() {
    this.route.navigate(['./hungerz-wallet']);
  }
  phone_number() {
    this.route.navigate(['./hungerz-sign-in']);
  }
  developed_by() {
    window.open("https://opuslab.works/", '_system', 'location=no');
  }
  buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }

}
