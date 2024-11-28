import { Component, OnInit } from '@angular/core';
import { MyEventsService } from '../services/events/my-events.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.page.html',
  styleUrls: ['./menu-list.page.scss'],
})
export class MenuListPage implements OnInit {

  constructor(private myEvent: MyEventsService) {
  }

  ngOnInit() {
  }

  viewMenu(menuNum) {
    this.myEvent.setMenuIdData(menuNum);
  }

}
