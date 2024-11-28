import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shophour-cart',
  templateUrl: './shophour-cart.page.html',
  styleUrls: ['./shophour-cart.page.scss'],
})
export class ShophourCartPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  select_address() {
    this.route.navigate(['./shophour-select-address']);
  }
}
