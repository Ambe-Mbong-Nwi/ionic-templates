import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-handyzone-account',
  templateUrl: './handyzone-account.page.html',
  styleUrls: ['./handyzone-account.page.scss'],
})
export class HandyzoneAccountPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  wallet() {
    this.route.navigate(['./handyzone-wallet']);
  }

  support() {
    this.route.navigate(['./handyzone-support']);
  }

}
