import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-woochat-group-chatting',
  templateUrl: './woochat-group-chatting.page.html',
  styleUrls: ['./woochat-group-chatting.page.scss'],
})
export class WoochatGroupChattingPage implements OnInit {
  viewType: string;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  setViewType(vt) {
    this.viewType = vt;
  }
  groupinfo() {
    this.route.navigate(['./woochat-group-info']);
  }
}
