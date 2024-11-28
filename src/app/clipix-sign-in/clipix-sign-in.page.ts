import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clipix-sign-in',
  templateUrl: './clipix-sign-in.page.html',
  styleUrls: ['./clipix-sign-in.page.scss'],
})
export class ClipixSignInPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  sign_up() {
    this.route.navigate(['./clipix-sign-up']);
  }
  // tabs() {
  //   this.route.navigate(['./sign-up']);
  // }
}
