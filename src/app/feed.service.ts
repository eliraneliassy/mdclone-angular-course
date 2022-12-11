import { Book } from './book.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private httpClient: HttpClient) { }

  getBooks(searchTerm: string): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append('q', searchTerm);

    return this.httpClient.get(`${this.BASE_URL}`, { params })
    .pipe(
      map((result: any) => result.items || []),
      map((items: any[]) => items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        imagePreviewUrl: item.volumeInfo.imageLinks.thumbnail,
        price: item.volumeInfo.pageCount,
        publishedDate: item.volumeInfo.publishedDate
      }))
    ));
  }
}
