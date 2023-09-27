import { Injectable } from '@angular/core';
import { BooksObj } from '../models/Gutemberg';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {


  // API Endpoint
  readonly BASE_URL = 'https://gutendex.com/books/';

  constructor(private http : HttpClient) {}

  // Getting the books from the API
  getBooks(){
    return this.http.get<BooksObj>(this.BASE_URL);
  }

  searchInclude(term: string){
    return this.http.get<any>(this.BASE_URL)
    .pipe(
      map((data: any) => data.results.filter((element: any) => element.authors[0]?.name.toLowerCase().includes(term.toLowerCase())))
    )
  }
}
