import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core'
import { HandyzoneBookingPage } from '../handyzone-booking/handyzone-booking.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-handyzone-provider-profile',
  templateUrl: './handyzone-provider-profile.page.html',
  styleUrls: ['./handyzone-provider-profile.page.scss'],
})
export class HandyzoneProviderProfilePage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;
  viewType: string;
  showToolbar = false;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  setViewType(vt) {
    this.viewType = vt;
  }

  scrollContent(scroll) {
    if (scroll === 'top') {
      this.ionContent.scrollToTop(300);
    }
    else {
      this.ionContent.scrollToPoint(0, 580, 300);
    }
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 580;
    }
  }
  booking() {
    this.modalController.create({ component: HandyzoneBookingPage }).then((modalElement) => modalElement.present());
  }

}
