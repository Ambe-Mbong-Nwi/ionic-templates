import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-qvid-comment',
  templateUrl: './qvid-comment.page.html',
  styleUrls: ['./qvid-comment.page.scss'],
})
export class QvidCommentPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
  user_profile() {
    this.modalController.dismiss();
    this.route.navigate(['./qvid-user-profile']);
  }
}
