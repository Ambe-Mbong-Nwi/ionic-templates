import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hungerz-home',
  templateUrl: './hungerz-home.page.html',
  styleUrls: ['./hungerz-home.page.scss'],
})
export class HungerzHomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  offers() {
    this.route.navigate(['./hungerz-offers']);
  }
  stores() {
    this.route.navigate(['./hungerz-store']);
  }
  items() {
    this.route.navigate(['./hungerz-items']);
  }
  table_booking() {
    this.route.navigate(['./hungerz-table-booking']);
  }
}
