import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctoworld-my-appointments',
  templateUrl: './doctoworld-my-appointments.page.html',
  styleUrls: ['./doctoworld-my-appointments.page.scss'],
})
export class DoctoworldMyAppointmentsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  appointment_detail() {
    this.route.navigate(['./doctoworld-appointment-detail']);
  }
 
  appointment_book() {
    this.route.navigate(['./doctoworld-book-appointment']);
  }
}
