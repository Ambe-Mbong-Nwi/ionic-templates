import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipix-movie',
  templateUrl: './clipix-movie.page.html',
  styleUrls: ['./clipix-movie.page.scss'],
})
export class ClipixMoviePage implements OnInit {
  tab: string = "clips";
  constructor() { }

  ngOnInit() {
  }

}
