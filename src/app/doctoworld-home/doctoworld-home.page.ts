import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctoworld-home',
  templateUrl: './doctoworld-home.page.html',
  styleUrls: ['./doctoworld-home.page.scss'],
})
export class DoctoworldHomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  seller_profile() {
    this.route.navigate(['./doctoworld-medicines']);
  }
  categories() {
    this.route.navigate(['./doctoworld-medicines']);
  }
  cart() {
    this.route.navigate(['./doctoworld-cart']);
  }
  // search() {
  //   this.route.navigate(['./specilities']);
  // }
}
