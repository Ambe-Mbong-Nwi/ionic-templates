import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shophour-select-address',
  templateUrl: './shophour-select-address.page.html',
  styleUrls: ['./shophour-select-address.page.scss'],
})
export class ShophourSelectAddressPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  payment_mode() {
    this.route.navigate(['./shophour-payment-mode']);
  }
}
