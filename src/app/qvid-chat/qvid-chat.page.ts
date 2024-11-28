import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qvid-chat',
  templateUrl: './qvid-chat.page.html',
  styleUrls: ['./qvid-chat.page.scss'],
})
export class QvidChatPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  user_profile() {
    this.route.navigate(['./qvid-user-profile']);
  }
}
