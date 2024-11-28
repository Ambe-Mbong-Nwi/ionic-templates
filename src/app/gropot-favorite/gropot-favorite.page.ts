import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gropot-favorite',
  templateUrl: './gropot-favorite.page.html',
  styleUrls: ['./gropot-favorite.page.scss'],
})
export class GropotFavoritePage implements OnInit {
  addItem1 = false;
  addItem2 = false;
  addItem3 = false;
  addItem4 = false;
  addItem5 = false;
  addItem6 = false;
  addItem7 = false;
  addItem8 = false;
  addItem9 = false;
  addItem10 = false;
  addItem11 = false;
  addItem12 = false;
  addItem13 = false;
  addItem14 = false;
  addItem15 = false;
  addItem16 = false;
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
    this.addItem4 = !this.addItem4;
    this.showCartButton = !this.showCartButton;
  }
  Item5() {
    this.addItem5 = !this.addItem5;
    this.showCartButton = !this.showCartButton;
  }
  Item6() {
    this.addItem6 = !this.addItem6;
    this.showCartButton = !this.showCartButton;
  }
  Item7() {
    this.addItem7 = !this.addItem7;
    this.showCartButton = !this.showCartButton;
  }
  Item8() {
    this.addItem8 = !this.addItem8;
    this.showCartButton = !this.showCartButton;
  }
  Item9() {
    this.addItem9 = !this.addItem9;
    this.showCartButton = !this.showCartButton;
  }
  Item10() {
    this.addItem10 = !this.addItem10;
    this.showCartButton = !this.showCartButton;
  }
  Item11() {
    this.addItem11 = !this.addItem11;
    this.showCartButton = !this.showCartButton;
  }
  Item12() {
    this.addItem12 = !this.addItem12;
    this.showCartButton = !this.showCartButton;
  }
  Item13() {
    this.addItem13 = !this.addItem13;
    this.showCartButton = !this.showCartButton;
  }
  Item14() {
    this.addItem14 = !this.addItem14;
    this.showCartButton = !this.showCartButton;
  }
  Item15() {
    this.addItem15 = !this.addItem15;
    this.showCartButton = !this.showCartButton;
  }
  Item16() {
    this.addItem16 = !this.addItem16;
    this.showCartButton = !this.showCartButton;
    this.showCartButton = !this.showCartButton;
  }
  itemInfo() {
    this.route.navigate(['./gropot-item-info']);
  }
  cart() {
    this.route.navigate(['./gropot-my-cart']);
  }
}
