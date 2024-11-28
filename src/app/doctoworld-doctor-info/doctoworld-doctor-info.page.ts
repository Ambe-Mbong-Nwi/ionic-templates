import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-doctoworld-doctor-info',
  templateUrl: './doctoworld-doctor-info.page.html',
  styleUrls: ['./doctoworld-doctor-info.page.scss'],
})
export class DoctoworldDoctorInfoPage implements OnInit {
  favorite_icon = false;
  constructor(private route: Router) { }

  ngOnInit() { 
  }

  toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
  }

  book_appointment_now() {
    this.route.navigate(['./doctoworld-book-appointment']);
  }
  // doctor_reviews() {
  //   this.route.navigate(['./doctor-reviews']);
  // }
}
