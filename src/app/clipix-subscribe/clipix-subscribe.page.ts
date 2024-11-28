import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clipix-subscribe',
  templateUrl: './clipix-subscribe.page.html',
  styleUrls: ['./clipix-subscribe.page.scss'],
})
export class ClipixSubscribePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


   payment() {
      this.route.navigate(['./clipix-payment']);
    }
}
