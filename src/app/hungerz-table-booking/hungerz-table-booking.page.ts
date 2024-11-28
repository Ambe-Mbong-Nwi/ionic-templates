import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hungerz-table-booking',
  templateUrl: './hungerz-table-booking.page.html',
  styleUrls: ['./hungerz-table-booking.page.scss'],
})
export class HungerzTableBookingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  items() {
    this.route.navigate(['./hungerz-restaurant-items']);
  }
}
