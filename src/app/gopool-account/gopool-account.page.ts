import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-gopool-account',
  templateUrl: './gopool-account.page.html',
  styleUrls: ['./gopool-account.page.scss'],
})
export class GopoolAccountPage implements OnInit {

  constructor(private route: Router, private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }
  my_profile() {
    this.route.navigate(['./gopool-my-profile']);
  }
  wallet() {
    this.route.navigate(['./gopool-wallet']);
  }
}
