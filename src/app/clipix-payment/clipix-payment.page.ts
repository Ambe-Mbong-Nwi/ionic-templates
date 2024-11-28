import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clipix-payment',
  templateUrl: './clipix-payment.page.html',
  styleUrls: ['./clipix-payment.page.scss'],
})
export class ClipixPaymentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  subscribed() {
    this.route.navigate(['./clipix-subscribed']);
  }
}
