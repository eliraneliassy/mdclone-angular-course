import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private httpClient: HttpClient) { }

  getBooks(searchTerm: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('q', searchTerm);

    return this.httpClient.get(`${this.BASE_URL}`, { params })
  }
}
