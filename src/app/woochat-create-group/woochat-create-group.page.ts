import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-woochat-create-group',
  templateUrl: './woochat-create-group.page.html',
  styleUrls: ['./woochat-create-group.page.scss'],
})
export class WoochatCreateGroupPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  // creategroupinfo() {
  //   this.route.navigate(['./woochat-create-group-info']);
  // }
}
