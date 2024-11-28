import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyEventsService } from '../services/events/my-events.service';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route: Router, private myEvent: MyEventsService, private navCtrl: NavController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.myEvent.setMenuIdData("zero");
  }
  // sliderDemo() {
  //   this.route.navigate(['./slider-demo']);
  // }
 
 
  clipix() {
    this.route.navigate(['./clipix-sign-in']);
  }
  doctoworld() {
    // console.log("docotoworld click");
    this.route.navigate(['./doctoworld-sign-in']);
  }
  gopool() {
    this.route.navigate(['./gopool-sign-in']);
  }
  gropot() {
    this.route.navigate(['./gropot-sign-in']);
  }
  shophour() {
    this.route.navigate(['./shophour-sign-in']);
  }
  hungerzHome() {
    this.route.navigate(['./hungerz-sign-in']);
  }
  handyzone() {
    this.route.navigate(['./handyzone-sign-in']);
  }
  qvid() {
    this.route.navigate(['./qvid-sign-in']);
  }
  woochat() {
    this.route.navigate(['./woochat-sign-in']);
  }
}
