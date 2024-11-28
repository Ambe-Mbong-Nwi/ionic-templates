import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qvid-sign-in',
  templateUrl: './qvid-sign-in.page.html',
  styleUrls: ['./qvid-sign-in.page.scss'],
})
export class QvidSignInPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  sign_up() {
    this.route.navigate(['./qvid-edit-profile']);
  }
  social_login() {
    this.route.navigate(['./qvid-edit-profile']);
  }
}
