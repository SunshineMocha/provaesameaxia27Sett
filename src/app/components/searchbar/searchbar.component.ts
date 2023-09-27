import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [
            CommonModule,
            MatInputModule,
            MatSelectModule,
            MatIconModule,
            MatButtonModule,
            FormsModule
  ],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  searchAuthor: string = "";

  @Output()
  searchAuthorEvent : EventEmitter<string> = new EventEmitter<string>();

  constructor(public connServ: ConnectionService){}

  onSearchClick(){
    this.searchAuthorEvent.emit(this.searchAuthor);
  }

  onSearch() {
    this.onSearchClick();
    console.log(this.searchAuthor);
  }
}
