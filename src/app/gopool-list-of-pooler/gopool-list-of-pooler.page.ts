import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gopool-list-of-pooler',
  templateUrl: './gopool-list-of-pooler.page.html',
  styleUrls: ['./gopool-list-of-pooler.page.scss'],
})
export class GopoolListOfPoolerPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  pool_info() {
    this.route.navigate(['./gopool-pool-info']);
  }
}
