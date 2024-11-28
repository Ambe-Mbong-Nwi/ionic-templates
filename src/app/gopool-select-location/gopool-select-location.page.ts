import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-gopool-select-location',
  templateUrl: './gopool-select-location.page.html',
  styleUrls: ['./gopool-select-location.page.scss'],
})
export class GopoolSelectLocationPage implements OnInit {
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  LocationSelected() {
    this.navCtrl.pop();
  }

}
