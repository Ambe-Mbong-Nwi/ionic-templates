import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctoworld-my-orders',
  templateUrl: './doctoworld-my-orders.page.html',
  styleUrls: ['./doctoworld-my-orders.page.scss'],
})
export class DoctoworldMyOrdersPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  ordersInfo() {
      this.route.navigate(['./doctoworld-order-info']);
    }
      
  // itemReview() {
  //     this.route.navigate(['./add-product-review']);
  //   }
}
