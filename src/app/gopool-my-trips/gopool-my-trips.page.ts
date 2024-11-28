import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gopool-my-trips',
  templateUrl: './gopool-my-trips.page.html',
  styleUrls: ['./gopool-my-trips.page.scss'],
})
export class GopoolMyTripsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  // TripInfo() {
  //   this.route.navigate(['./trip-info']);
  // }
  pool_taker_request() {
    this.route.navigate(['./gopool-pool-taker-request']);
  }
  // list_of_pooler() {
  //   this.route.navigate(['./list-of-pooler']);
  // }
}
