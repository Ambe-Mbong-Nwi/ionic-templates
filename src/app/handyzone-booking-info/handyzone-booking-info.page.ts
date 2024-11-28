import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Gesture, GestureController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-handyzone-booking-info',
  templateUrl: './handyzone-booking-info.page.html',
  styleUrls: ['./handyzone-booking-info.page.scss'],
})
export class HandyzoneBookingInfoPage implements OnInit {
  viewType: string;
  counter = 0;
  swipeGesture: Gesture;
  @ViewChild('contentElement', { static: true, read: ElementRef }) contentElement: ElementRef;
  platform: any;
  constructor(private gestureController: GestureController, private ref: ChangeDetectorRef, private route: Router) { }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.swipeGesture.destroy();
  }
  closeContainer() {
    var d = document.getElementById('content-inner');
    d.style.bottom = '0px';
    d.style.height = '195px';
    d.style.overflow = 'hidden';
  }

  ionViewDidEnter() {
    this.swipeGesture = this.gestureController.create({
      el: this.contentElement.nativeElement,
      direction: 'y',
      gestureName: 'swipe',
      // onStart: (detail) => this.swipeStart(detail),
      onEnd: (detail) => this.swipeEvent(detail)
    });
    this.swipeGesture.enable();
  }

  swipeEvent(detail) {
    this.ref.detectChanges();
    console.log(detail)
    var d = document.getElementById('content-inner');
    // d.style.top = '350px'; 
    if (detail.velocityX > 0) {
      d.style.top = '100px';
      d.style.height = '100vh';
      d.style.overflow = 'auto';
    }
    else if (detail.velocityY > 0) {
      d.style.top = '350px';
      d.style.height = '195px';
      d.style.overflow = 'hidden';
    }
    else {
      d.style.bottom = '0px';
      d.style.height = '195px';
      d.style.overflow = 'hidden';
    }
  }

  conversation() {
    this.route.navigate(['./handyzone-conversation']);
  }

}