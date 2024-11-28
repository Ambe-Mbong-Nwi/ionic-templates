import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns'
import { DoctoworldSelectDayesPage } from '../doctoworld-select-dayes/doctoworld-select-dayes.page';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-doctoworld-create-pill-reminders',
  templateUrl: './doctoworld-create-pill-reminders.page.html',
  styleUrls: ['./doctoworld-create-pill-reminders.page.scss'],
})
export class DoctoworldCreatePillRemindersPage implements OnInit {
  modes = ['date-time'];
  select_seat: string = "1";
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  formattedStringTwo = '';
  showPicker = false;
  @ViewChild(IonDatetime) datetime: IonDatetime;
  constructor(private modalController: ModalController, private navCtrl: NavController) {
    this.setToday();
    this.setTodayTwo();
  }
  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm');
  }
  setTodayTwo() {
    this.formattedStringTwo = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm');
  }
  ngOnInit() {
  }

  dateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'HH:mm');
  }
  dateChangedTwo(value) {
    this.dateValue = value;
    this.formattedStringTwo = format(parseISO(value), 'HH:mm');
  }

  close() {
    this.datetime.cancel(true);
  }
  select() {
    this.datetime.confirm(true);
  }

  select_day() {
    this.modalController.create({ component: DoctoworldSelectDayesPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }

  save() {
    this.navCtrl.pop();
  }
}
