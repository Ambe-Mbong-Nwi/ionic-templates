import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hungerz-confirm-order',
  templateUrl: './hungerz-confirm-order.page.html',
  styleUrls: ['./hungerz-confirm-order.page.scss'],
})
export class HungerzConfirmOrderPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  payment() {
    this.route.navigate(['./hungerz-payment']);
  }
  // saved_addresses() {
  //   this.route.navigate(['./saved-addresses']);
  // }
}
