import { Component, OnInit, Inject } from '@angular/core';



@Component({
  selector: 'app-clipix-settings',
  templateUrl: './clipix-settings.page.html',
  styleUrls: ['./clipix-settings.page.scss'],
})
export class ClipixSettingsPage implements OnInit {
  video_quality: string = "1";
  downloads: string = "1";
  language: string = "1";

  languages: Array<{ code: string, name: string }>;


  constructor() { }

  ngOnInit() {
  }

}
