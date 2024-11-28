import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shophour-item',
  templateUrl: './shophour-item.page.html',
  styleUrls: ['./shophour-item.page.scss'],
})
export class ShophourItemPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  cart() {
    this.route.navigate(['./shophour-cart']);
  }
  item_details() {
    this.route.navigate(['./shophour-item-detail']);
  }
}
