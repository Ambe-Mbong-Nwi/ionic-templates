import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctoworld-pill-reminders',
  templateUrl: './doctoworld-pill-reminders.page.html',
  styleUrls: ['./doctoworld-pill-reminders.page.scss'],
})
export class DoctoworldPillRemindersPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  pill_reminder() {
    this.route.navigate(['./doctoworld-create-pill-reminders']);
  }
}
