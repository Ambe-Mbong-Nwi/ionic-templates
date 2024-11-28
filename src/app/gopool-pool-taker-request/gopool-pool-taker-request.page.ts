import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gopool-pool-taker-request',
  templateUrl: './gopool-pool-taker-request.page.html',
  styleUrls: ['./gopool-pool-taker-request.page.scss'],
})
export class GopoolPoolTakerRequestPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  poolTakerInfo() {
    this.route.navigate(['./gopool-pool-taker-info']);
  }
  ride_accepted() {
    this.route.navigate(['./gopool-ride-accepted']);
  }
}
