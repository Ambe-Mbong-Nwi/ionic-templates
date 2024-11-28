import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hungerz-sign-in',
  templateUrl: './hungerz-sign-in.page.html',
  styleUrls: ['./hungerz-sign-in.page.scss'],
})
export class HungerzSignInPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  register() {
    this.route.navigate(['./hungerz-tabs']);
  }
  socila_login() {
    this.route.navigate(['./hungerz-tabs']);
  }
}
