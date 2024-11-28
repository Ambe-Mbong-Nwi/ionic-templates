import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gropot-categories',
  templateUrl: './gropot-categories.page.html',
  styleUrls: ['./gropot-categories.page.scss'],
})
export class GropotCategoriesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  subCategories() {
    this.route.navigate(['./gropot-sub-categories']);
  }
}
