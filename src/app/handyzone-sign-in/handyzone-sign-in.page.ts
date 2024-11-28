import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-handyzone-sign-in',
  templateUrl: './handyzone-sign-in.page.html',
  styleUrls: ['./handyzone-sign-in.page.scss'],
})
export class HandyzoneSignInPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  continue() {
    this.navCtrl.navigateRoot(['./handyzone-tabs/handyzoneHome']);
  }
}
