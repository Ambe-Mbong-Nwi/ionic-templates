import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hungerz-store',
  templateUrl: './hungerz-store.page.html',
  styleUrls: ['./hungerz-store.page.scss'],
})
export class HungerzStorePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  items() {
    this.route.navigate(['./hungerz-items']);
  }
}
