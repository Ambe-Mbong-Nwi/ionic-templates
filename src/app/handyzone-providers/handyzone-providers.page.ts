import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-handyzone-providers',
  templateUrl: './handyzone-providers.page.html',
  styleUrls: ['./handyzone-providers.page.scss'],
})
export class HandyzoneProvidersPage implements OnInit {
  viewType: string;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  setViewType(vt) {
    this.viewType = vt;
  }

  provider_profile() {
    this.route.navigate(['./handyzone-provider-profile']);
  }
}
