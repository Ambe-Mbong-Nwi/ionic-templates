import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hungerz-variation-selection',
  templateUrl: './hungerz-variation-selection.page.html',
  styleUrls: ['./hungerz-variation-selection.page.scss'],
})
export class HungerzVariationSelectionPage implements OnInit {

  constructor(private modalController: ModalController) { }


  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss();
  }
}
