import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gropot-home',
  templateUrl: './gropot-home.page.html',
  styleUrls: ['./gropot-home.page.scss'],
})
export class GropotHomePage implements OnInit {
  addItem1 = false;
  addItem2 = false;
  addItem3 = false;
  addItem4 = false;
  addItem5 = false;
  addItem6 = false;
  addItem7 = false;
  addItem8 = false;
  showCartButton = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  Item1() {
    this.addItem1 = !this.addItem1;
    this.showCartButton = !this.showCartButton;
  }
  Item2() {
    this.addItem2 = !this.addItem2;
    this.showCartButton = !this.showCartButton;
  }
  Item3() {
    this.addItem3 = !this.addItem3;
    this.showCartButton = !this.showCartButton;
  }
  Item4() {
    this.showCartButton = !this.showCartButton;
    this.addItem4 = !this.addItem4;
  }
  Item5() {
    this.showCartButton = !this.showCartButton;
    this.addItem5 = !this.addItem5;
  }
  Item6() {
    this.showCartButton = !this.showCartButton;
    this.addItem6 = !this.addItem6;
  }
  Item7() {
    this.showCartButton = !this.showCartButton;
    this.addItem7 = !this.addItem7;
  }
  Item8() {
    this.showCartButton = !this.showCartButton;
    this.addItem8 = !this.addItem8;
  }

  selectLocation() {
    this.route.navigate(['./gropot-select-location']);
  }
  wallet() {
    this.route.navigate(['./gropot-wallet']);
  }
  subCategories() {
    this.route.navigate(['./gropot-sub-categories']);
  }
  itemInfo() {
    this.route.navigate(['./gropot-item-info']);
  }
  cart() {
    this.route.navigate(['./gropot-my-cart']);
  }
}
