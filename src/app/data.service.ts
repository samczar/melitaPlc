import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://selfcare-service.demo.melita.com/interview/api/offers';
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  public getOffers() {
    return this.http.get(this.baseUrl).pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  public getSubscription(id) {
    return this.http.get(`${this.baseUrl}/${id}/subscriptions`).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
}
