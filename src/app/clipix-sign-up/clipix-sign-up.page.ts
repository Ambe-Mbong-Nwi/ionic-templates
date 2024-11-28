import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clipix-sign-up',
  templateUrl: './clipix-sign-up.page.html',
  styleUrls: ['./clipix-sign-up.page.scss'],
})
export class ClipixSignUpPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }

  clipixTabs() {
    this.navCtrl.navigateRoot(['./clipix-tabs/clipixHome']);
  }
 
}
