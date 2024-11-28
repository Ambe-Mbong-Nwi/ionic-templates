import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyEventsService {
  private selectedLanguage = new Subject<string>();
  private selectedMenuId = new Subject<string>();
  private currentAnimation = new Subject<boolean>();

  constructor() { }

  public getMenuIdObservable(): Observable<string> {
    return this.selectedMenuId.asObservable();
  }

  public setMenuIdData(data) {
    this.selectedMenuId.next(data);
  }

  public getLanguageObservable(): Observable<string> {
    return this.selectedLanguage.asObservable();
  }

  public setLanguageData(data) {
    this.selectedLanguage.next(data);
  }

  public setAnimation(data) {
    this.currentAnimation.next(data);
  }

  public getAnimationObservable(): Observable<boolean> {
    return this.currentAnimation.asObservable();
  }

}