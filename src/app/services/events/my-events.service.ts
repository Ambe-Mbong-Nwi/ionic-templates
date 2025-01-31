import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyEventsService {
  private selectedLanguage = new Subject<string>();
  private selectedMenuId = new Subject<string>();
  handleError: any;
  constructor(private http: HttpClient) { }

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

  public getCountries(): Observable<Array<any>> {
    return this.http.get<Array<any>>('./assets/json/countries.json').pipe(
      tap(data => {
        let indiaIndex = -1;
        // if (data) {
        //   for (let i = 0; i < data.length; i++) {
        //     if (data[i].name == "India") {
        //       indiaIndex = i;
        //       break;
        //     }
        //   }
        // }
        if (indiaIndex != -1) data.unshift(data.splice(indiaIndex, 1)[0]);
      })
    );
  } 

}