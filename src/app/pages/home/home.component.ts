import { Component } from '@angular/core';
import { Author, Book } from 'src/app/models/Gutemberg';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  books: Book[] = [];
  authors: Author[] = [];
  authorBooks: Book[] = [];

  constructor(public connServ: ConnectionService){}

  ngOnInit(): void {
    this.connServ.getBooks().subscribe({
        next: (data:any) => this.books = data.results,
        error: err => console.log(err)
      })
   }

  onSearch(searchAuthor: string){
    this.connServ.searchInclude(searchAuthor).subscribe({
      next: data => this.books = data,
      error: err => console.log(err)
    });
  }

}
