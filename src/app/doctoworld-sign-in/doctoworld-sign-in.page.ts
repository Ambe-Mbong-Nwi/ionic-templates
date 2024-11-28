import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctoworld-sign-in',
  templateUrl: './doctoworld-sign-in.page.html',
  styleUrls: ['./doctoworld-sign-in.page.scss'],
})
export class DoctoworldSignInPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }

  tabs() {
    this.navCtrl.navigateRoot(['./doctoworld-tabs/DoctoworldHome']);
  }
}
