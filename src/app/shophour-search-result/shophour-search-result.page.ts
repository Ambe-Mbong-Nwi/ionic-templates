import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-shophour-search-result',
  templateUrl: './shophour-search-result.page.html',
  styleUrls: ['./shophour-search-result.page.scss'],
})
export class ShophourSearchResultPage implements OnInit {

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  item_details() {
    this.route.navigate(['./shophour-item-detail']);
  }
  // search() {
  //   this.route.navigate(['./search']);
  // }
  search() {
    this.navCtrl.pop();
  }
}
