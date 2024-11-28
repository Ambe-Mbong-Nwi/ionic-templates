import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shophour-seller-info',
  templateUrl: './shophour-seller-info.page.html',
  styleUrls: ['./shophour-seller-info.page.scss'],
})
export class ShophourSellerInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  item_details() {
    this.route.navigate(['./shophour-item-detail']);
  }
  cart() {
    this.route.navigate(['./shophour-cart']);
  }
}
