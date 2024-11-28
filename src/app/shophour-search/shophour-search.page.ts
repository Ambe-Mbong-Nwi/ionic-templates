import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shophour-search',
  templateUrl: './shophour-search.page.html',
  styleUrls: ['./shophour-search.page.scss'],
})
export class ShophourSearchPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  search_result() {
    this.route.navigate(['./shophour-search-result']);
  }
  item() {
    this.route.navigate(['./shophour-item']);
  }
}
