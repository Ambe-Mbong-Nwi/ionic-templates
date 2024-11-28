import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipix-web-series',
  templateUrl: './clipix-web-series.page.html',
  styleUrls: ['./clipix-web-series.page.scss'],
})
export class ClipixWebSeriesPage implements OnInit {
  tab: string = "seasons";
  seasons_tab: string = "season1";
  constructor() { }

  ngOnInit() {
  }

}
