import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gropot-my-cart',
  templateUrl: './gropot-my-cart.page.html',
  styleUrls: ['./gropot-my-cart.page.scss'],
})
export class GropotMyCartPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  coupon() {
    this.route.navigate(['./gropot-coupon']);
  }
  itemInfo() {
    this.route.navigate(['./gropot-item-info']);
  }
  selectLocation() {
    this.route.navigate(['./gropot-select-location']);
  }
  paymentMethod() {
    this.route.navigate(['./gropot-payment-method']);
  }
}
