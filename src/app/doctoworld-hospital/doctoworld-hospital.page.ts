import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctoworld-hospital',
  templateUrl: './doctoworld-hospital.page.html',
  styleUrls: ['./doctoworld-hospital.page.scss'],
})
export class DoctoworldHospitalPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  hospital_info() {
    this.route.navigate(['./doctoworld-hospital-info']);
  }
}
