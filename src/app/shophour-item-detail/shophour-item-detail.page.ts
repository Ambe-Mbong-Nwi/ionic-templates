import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shophour-item-detail',
  templateUrl: './shophour-item-detail.page.html',
  styleUrls: ['./shophour-item-detail.page.scss'],
})
export class ShophourItemDetailPage implements OnInit {
  FavoriteIcon = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  toggleFavoriteIcon() {
    this.FavoriteIcon = !this.FavoriteIcon;
  }
  cart() {
    this.route.navigate(['./shophour-cart']);
  }
  reviews() {
    this.route.navigate(['./shophour-reviews']);
  }
  seller_info() {
    this.route.navigate(['./shophour-seller-info']);
  }
}
