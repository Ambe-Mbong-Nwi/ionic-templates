import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clipix-home',
  templateUrl: './clipix-home.page.html',
  styleUrls: ['./clipix-home.page.scss'],
})
export class ClipixHomePage implements OnInit {
  homeTab: string = "movies";
  constructor(private route: Router) { }

  ngOnInit() {
  }

  movie() {
    this.route.navigate(['./clipix-movie']);
  }
  web_series() {
    this.route.navigate(['./clipix-web-series']);
  }
}
