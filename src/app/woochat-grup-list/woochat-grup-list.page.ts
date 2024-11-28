import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-woochat-grup-list',
  templateUrl: './woochat-grup-list.page.html',
  styleUrls: ['./woochat-grup-list.page.scss'],
})
export class WoochatGrupListPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  GroupChatting() {
    this.route.navigate(['./woochat-group-chatting']);
  }
  create_group() {
    this.route.navigate(['./woochat-create-group']);
  }

}
