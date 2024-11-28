import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-woochat-call-logs',
  templateUrl: './woochat-call-logs.page.html',
  styleUrls: ['./woochat-call-logs.page.scss'],
})
export class WoochatCallLogsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  profileinfo() {
    this.route.navigate(['./woochat-profile-info']);
  }
}
