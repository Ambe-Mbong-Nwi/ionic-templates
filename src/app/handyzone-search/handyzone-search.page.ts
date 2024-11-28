import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-handyzone-search',
  templateUrl: './handyzone-search.page.html',
  styleUrls: ['./handyzone-search.page.scss'],
})
export class HandyzoneSearchPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  services() {
    this.route.navigate(['./handyzone-services']);
  }
}
