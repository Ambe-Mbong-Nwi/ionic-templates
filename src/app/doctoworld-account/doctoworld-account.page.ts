import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctoworld-account',
  templateUrl: './doctoworld-account.page.html',
  styleUrls: ['./doctoworld-account.page.scss'],
})
export class DoctoworldAccountPage implements OnInit {

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  wallet() {
    this.route.navigate(['./doctoworld-wallet']);
  }
  orders() {
    this.route.navigate(['./doctoworld-my-orders']);
  }
  pillReminders() {
    this.route.navigate(['./doctoworld-pill-reminders']);
  }
  logout() {
    this.navCtrl.navigateRoot(['./doctoworld-sign-in']);
  }
}
