import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config';
import { MyEvent } from 'src/services/myevent.services';

@Component({
  selector: 'app-handyzone-home',
  templateUrl: './handyzone-home.page.html',
  styleUrls: ['./handyzone-home.page.scss'],
})
export class HandyzoneHomePage implements OnInit {
  my_ion_col: any;
  start: { left: number; right: number; top: number; bottom: number; };
  showClassInAnimation: boolean;

  constructor(@Inject(APP_CONFIG) public config: AppConfig,  private myEvent: MyEvent,
    private animationCtrl: AnimationController, private route: Router, private navCtrl: NavController, private modalController: ModalController) {
    this.myEvent.getAnimationObservable().subscribe(res => {
      if (res && this.my_ion_col) {
        this.showClassInAnimation = true;
        this.callAnimation(true);
      }

    })
  }

  ngOnInit() {
  }

  services() {
    this.route.navigate(['./handyzone-services']);
  }
  // address_list() {
  //   this.route.navigate(['./address-list']);
  // }
  account() {
    this.route.navigate(['./handyzone-account']);
  }
  search() {
    this.route.navigate(['./handyzone-search']);
  }

  // developed_by() {
  //   window.open("https://opuslab.works/", '_system', 'location=no');
  // }

  // buyappalert() {
  //   this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  // }

  animations(id) {
    this.showClassInAnimation = true;
    if (this.showClassInAnimation) {
      this.my_ion_col = document.getElementById(`${id}`);
      this.start = { left: 0, right: 0, top: 0, bottom: 0 };
      this.start = this.my_ion_col.getBoundingClientRect();
      this.callAnimation(false);
    }
  }

  callAnimation(animation: boolean) {
    var end = { left: 170 - this.start.left, top: 150 - this.start.top };
    const forwardAnimation = this.animationCtrl.create()
      .addElement(this.my_ion_col)
      .duration(300)
      .iterations(1)
      .direction('alternate')
      .beforeAddClass('new_service_box')
      .afterRemoveClass('new_service_box')
      .fromTo(
        'transform',
        `translate(0,0) scale(1,1)`,
        `translate(${end.left}px,${end.top}px) scale(2,3)`,
      )

    const reverseAnimation = this.animationCtrl.create()
      .addElement(this.my_ion_col)
      .duration(300)
      .iterations(1)
      .direction('reverse')
      .beforeAddClass('new_service_box')
      .afterRemoveClass('new_service_box')
      .fromTo(
        'transform',
        `translate(0,0) scale(1,1)`,
        `translate(${end.left}px,${end.top}px) scale(2,3)`,
      )
    if (!animation) {
      setTimeout(() => {
        forwardAnimation.play();
        this.navCtrl.navigateForward(['./handyzone-services']);
      }, 1)
      forwardAnimation.onFinish(() => {
        forwardAnimation.stop();
      })
    }
    if (animation) {
      reverseAnimation.play();
      // reverseAnimation.onFinish(() => {
      //   reverseAnimation.stop();
      //   this.showClassInAnimation = false;
      // })
      setTimeout(() => { reverseAnimation.stop(); this.showClassInAnimation = false; }, 400)
    }
  }
}
