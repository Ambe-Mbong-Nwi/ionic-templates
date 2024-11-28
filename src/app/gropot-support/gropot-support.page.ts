import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gropot-support',
  templateUrl: './gropot-support.page.html',
  styleUrls: ['./gropot-support.page.scss'],
})
export class GropotSupportPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  submit() {
    this.navCtrl.pop();
  }
}
