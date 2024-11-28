import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gopool-chats',
  templateUrl: './gopool-chats.page.html',
  styleUrls: ['./gopool-chats.page.scss'],
})
export class GopoolChatsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  conversation() {
    this.route.navigate(['./gopool-conversation']);
  }
}
