import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clipix-subscribed',
  templateUrl: './clipix-subscribed.page.html',
  styleUrls: ['./clipix-subscribed.page.scss'],
})
export class ClipixSubscribedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tabs() {
      this.navCtrl.navigateRoot(['./clipix-home']);
    } 
}
