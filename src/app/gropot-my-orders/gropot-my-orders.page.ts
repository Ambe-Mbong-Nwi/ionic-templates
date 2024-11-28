import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gropot-my-orders',
  templateUrl: './gropot-my-orders.page.html',
  styleUrls: ['./gropot-my-orders.page.scss'],
})
export class GropotMyOrdersPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  orderInfo() {
    this.route.navigate(['./gropot-order-info']);
  }
  orderDelivered() {
    this.route.navigate(['./gropot-order-delivered']);
  }
}
