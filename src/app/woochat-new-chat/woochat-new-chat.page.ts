import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-woochat-new-chat',
  templateUrl: './woochat-new-chat.page.html',
  styleUrls: ['./woochat-new-chat.page.scss'],
})
export class WoochatNewChatPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  chatting() {
    this.route.navigate(['./woochat-chatting']);
  }
  create_group() {
    this.route.navigate(['./woochat-create-group']);
  }
}
