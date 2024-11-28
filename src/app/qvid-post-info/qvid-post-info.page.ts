import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-qvid-post-info',
  templateUrl: './qvid-post-info.page.html',
  styleUrls: ['./qvid-post-info.page.scss'],
})
export class QvidPostInfoPage implements OnInit {
  share_video_with: string = "1";
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tabs() {
    this.navCtrl.navigateRoot(['./qvid-tabs']);
  }
}
