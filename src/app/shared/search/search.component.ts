import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() keyWord: EventEmitter<any> = new EventEmitter();
  searchVal = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
