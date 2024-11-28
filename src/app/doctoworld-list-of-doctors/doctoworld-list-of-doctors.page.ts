import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctoworld-list-of-doctors',
  templateUrl: './doctoworld-list-of-doctors.page.html',
  styleUrls: ['./doctoworld-list-of-doctors.page.scss'],
})
export class DoctoworldListOfDoctorsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  doctor_profile() {
    this.route.navigate(['./doctoworld-doctor-info']);
  }
}
