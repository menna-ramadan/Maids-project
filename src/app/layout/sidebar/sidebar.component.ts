import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input()
  inputSideNav!: MatSidenav;
  canShow = false;

  constructor() {
    if (localStorage.getItem('role') == 'Admin') {
      this.canShow = true;
    }
  }

  ngOnInit(): void {}
}
