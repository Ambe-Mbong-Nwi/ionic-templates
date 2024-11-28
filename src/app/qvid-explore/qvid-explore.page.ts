import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { QvidVideoviewPage } from '../qvid-videoview/qvid-videoview.page'; 

@Component({
  selector: 'app-qvid-explore',
  templateUrl: './qvid-explore.page.html',
  styleUrls: ['./qvid-explore.page.scss'],
})
export class QvidExplorePage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

  // videos_list() {
  //   this.route.navigate(['./video-list']);
  // }
  search_result() {
    this.route.navigate(['./qvid-search-result']);
  }

  video_view() {
    this.modalController.create({ component: QvidVideoviewPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }

}
