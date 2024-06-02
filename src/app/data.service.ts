import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = '/api/realTimeARB';

  constructor(private http: HttpClient) { }

  fetchData(startDate: string, endDate: string, groupBy: string,timeZone: string, apiKey: string): Observable<any> {

    const url = `${this.apiUrl}/${startDate}/${endDate}/${groupBy}/${timeZone}`;
    const params = new HttpParams().set('apiToken', apiKey);

    return this.http.get<any>(url, { params });
  }
}
