import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gropot-select-location',
  templateUrl: './gropot-select-location.page.html',
  styleUrls: ['./gropot-select-location.page.scss'],
})
export class GropotSelectLocationPage implements OnInit {

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  save() {
    this.navCtrl.pop();
  }
}
