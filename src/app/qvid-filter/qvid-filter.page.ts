import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qvid-filter',
  templateUrl: './qvid-filter.page.html',
  styleUrls: ['./qvid-filter.page.scss'],
})
export class QvidFilterPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  post_info() {
    this.route.navigate(['./qvid-post-info']);
  }
}
