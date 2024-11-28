import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clipix-watchlist',
  templateUrl: './clipix-watchlist.page.html',
  styleUrls: ['./clipix-watchlist.page.scss'],
})
export class ClipixWatchlistPage implements OnInit {
  tab: string = "movies";
  toggle1 = false;
  toggle2 = false;
  toggle3 = false;
  toggle4 = false;
  toggle5 = false;
  toggle6 = false;
  toggle7 = false;
  toggle8 = false;
  toggle9 = false;
  toggle10 = false;
  toggle11 = false;
  toggle12 = false;
  toggle13 = false;
  toggle14 = false;
  toggle15 = false;
  toggle16 = false;
  toggle17 = false;
  toggle18 = false;
  toggle19 = false;
  toggle20 = false;
  toggle21 = false;
  toggle22 = false;
  toggle23 = false;
  toggle24 = false;
  toggle25 = false;
  toggle26 = false;
  toggle27 = false;
  toggle28 = false;
  toggle29 = false;
  toggle30 = false;
  toggle31 = false;
  toggle32 = false;
  toggle33 = false;
  toggle34 = false;
  toggle35 = false;
  toggle36 = false;
  toggle37 = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  toggleOption1() {
    this.toggle1 = !this.toggle1;
  } toggleOption2() {
    this.toggle2 = !this.toggle2;
  } toggleOption3() {
    this.toggle3 = !this.toggle3;
  } toggleOption4() {
    this.toggle4 = !this.toggle4;
  } toggleOption5() {
    this.toggle5 = !this.toggle5;
  } toggleOption6() {
    this.toggle6 = !this.toggle6;
  } toggleOption7() {
    this.toggle7 = !this.toggle7;
  } toggleOption8() {
    this.toggle8 = !this.toggle8;
  } toggleOption9() {
    this.toggle9 = !this.toggle9;
  } toggleOption10() {
    this.toggle10 = !this.toggle10;
  } toggleOption11() {
    this.toggle11 = !this.toggle11;
  } toggleOption12() {
    this.toggle12 = !this.toggle12;
  } toggleOption13() {
    this.toggle13 = !this.toggle13;
  } toggleOption14() {
    this.toggle14 = !this.toggle14;
  } toggleOption15() {
    this.toggle15 = !this.toggle15;
  } toggleOption16() {
    this.toggle16 = !this.toggle16;
  } toggleOption17() {
    this.toggle17 = !this.toggle17;
  } toggleOption18() {
    this.toggle18 = !this.toggle18;
  } toggleOption19() {
    this.toggle19 = !this.toggle19;
  } toggleOption20() {
    this.toggle20 = !this.toggle20;
  } toggleOption21() {
    this.toggle21 = !this.toggle21;
  } toggleOption22() {
    this.toggle22 = !this.toggle22;
  } toggleOption23() {
    this.toggle23 = !this.toggle23;
  } toggleOption24() {
    this.toggle24 = !this.toggle24;
  } toggleOption25() {
    this.toggle25 = !this.toggle25;
  } toggleOption26() {
    this.toggle26 = !this.toggle26;
  } toggleOption27() {
    this.toggle27 = !this.toggle27;
  } toggleOption28() {
    this.toggle28 = !this.toggle28;
  } toggleOption29() {
    this.toggle29 = !this.toggle29;
  } toggleOption30() {
    this.toggle30 = !this.toggle30;
  } toggleOption31() {
    this.toggle31 = !this.toggle31;
  } toggleOption32() {
    this.toggle32 = !this.toggle32;
  } toggleOption33() {
    this.toggle33 = !this.toggle33;
  } toggleOption34() {
    this.toggle34 = !this.toggle34;
  } toggleOption35() {
    this.toggle35 = !this.toggle35;
  } toggleOption36() {
    this.toggle36 = !this.toggle36;
  } toggleOption37() {
    this.toggle37 = !this.toggle37;
  }
  movie() {
    this.route.navigate(['./clipix-movie']);
  }
  web_series() {
    this.route.navigate(['./clipix-web-series']);
  }

}
