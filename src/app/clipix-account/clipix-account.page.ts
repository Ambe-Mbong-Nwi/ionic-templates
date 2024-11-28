import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clipix-account',
  templateUrl: './clipix-account.page.html',
  styleUrls: ['./clipix-account.page.scss'],
})
export class ClipixAccountPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }
  sign_in() {
    this.navCtrl.navigateRoot(['./clipix-sign-in']);
  }
  my_profile() {
    this.route.navigate(['./clipix-my-profile']);
  }
  settings() {
    this.route.navigate(['./clipix-settings']);
  }
  // privacy_policy() {
  //   this.route.navigate(['./clipix-privacy-policy']);
  // }
  support() {
    this.route.navigate(['./clipix-support']);
  }
  subscribe() {
    this.route.navigate(['./clipix-subscribe']);
  }
}
