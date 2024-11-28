import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-doctoworld-select-dayes',
  templateUrl: './doctoworld-select-dayes.page.html',
  styleUrls: ['./doctoworld-select-dayes.page.scss'],
})
export class DoctoworldSelectDayesPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
