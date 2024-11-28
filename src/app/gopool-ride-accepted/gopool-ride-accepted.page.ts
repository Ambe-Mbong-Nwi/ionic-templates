import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gopool-ride-accepted',
  templateUrl: './gopool-ride-accepted.page.html',
  styleUrls: ['./gopool-ride-accepted.page.scss'],
})
export class GopoolRideAcceptedPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  rideRoute() {
    this.route.navigate(['./gopool-ride-route']);
  }
}
