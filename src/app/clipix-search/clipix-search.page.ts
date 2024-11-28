import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clipix-search',
  templateUrl: './clipix-search.page.html',
  styleUrls: ['./clipix-search.page.scss'],
})
export class ClipixSearchPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  movie() {
    this.route.navigate(['./clipix-movie']);
  }
}
