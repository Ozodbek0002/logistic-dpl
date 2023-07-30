import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private api = environment.telegram_api;
  private headers = new HttpHeaders()
    .set('content-type', 'application/x-www-form-urlencoded')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private _http: HttpClient) { }

  sendSms(data: any, chanel: string): Observable<any> {
    return this._http.get<any>(`${this.api}${chanel}&text=${data}`, {'headers': this.headers})
                      .pipe(
                        debounceTime(5000),
                        distinctUntilChanged()
                      );
  }

}
