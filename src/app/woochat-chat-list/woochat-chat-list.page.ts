import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-woochat-chat-list',
  templateUrl: './woochat-chat-list.page.html',
  styleUrls: ['./woochat-chat-list.page.scss'],
})
export class WoochatChatListPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  chatting() {
    this.route.navigate(['./woochat-chatting']);
  }

  new_chat() {
    this.route.navigate(['./woochat-new-chat']);
  }
}
