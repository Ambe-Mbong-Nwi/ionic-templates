import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-handyzone-service-request',
  templateUrl: './handyzone-service-request.page.html',
  styleUrls: ['./handyzone-service-request.page.scss'],
})
export class HandyzoneServiceRequestPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  providers() {
    this.route.navigate(['./handyzone-providers']);
  }
}
