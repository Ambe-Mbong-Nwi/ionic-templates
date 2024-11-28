import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctoworld-medicine-info',
  templateUrl: './doctoworld-medicine-info.page.html',
  styleUrls: ['./doctoworld-medicine-info.page.scss'],
})
export class DoctoworldMedicineInfoPage implements OnInit {
  favorite_icon = false;
  tab: string = "about";
  gaming: string = "1";
  constructor(private route: Router) { }

  ngOnInit() {
  }

  toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
  }

  cart() {
    this.route.navigate(['./doctoworld-cart']);
  }
}
