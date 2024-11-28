import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyEventsService } from '../services/events/my-events.service';
@Component({
  selector: 'app-shophour-home',
  templateUrl: './shophour-home.page.html',
  styleUrls: ['./shophour-home.page.scss'],
})
export class ShophourHomePage implements OnInit {

  constructor(private route: Router, private myEvent: MyEventsService) { }

  ngOnInit() {
  }

  item_details() {
    this.route.navigate(['./shophour-item-detail']);
  }
  item() {
    this.route.navigate(['./shophour-item']);
  }
  search() {
    this.route.navigate(['./shophour-search']);
  }
  cart() {
    this.route.navigate(['./shophour-cart']);
  }

  viewMenu(menuNum) {
    this.myEvent.setMenuIdData(menuNum);
  }
}
