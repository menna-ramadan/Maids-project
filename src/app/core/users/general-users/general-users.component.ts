import { Component, EventEmitter, OnInit } from '@angular/core';
import { getFullImageUrl, User, UsersStatus } from '../../models/user';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-general-users',
  templateUrl: './general-users.component.html',
  styleUrls: ['./general-users.component.css'],
})
export class GeneralUsersComponent implements OnInit {
  tabs = UsersStatus;
  users: User[] = [];
  Subscription: Subscription = new Subscription();
  totalCount: number = 0;
  pageSize = 10;
  currentPage: EventEmitter<number> = new EventEmitter();
  searchKey: string = '';
  pageObject: any = {
    paging: { pageNumber: 1, pageSize: 10 },
  };

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getAllUsersList();
  }

  getAllUsersList(search = false) {
    search ? (this.pageObject.paging.pageNumber = 1) : null;
    this.Subscription.add(
      this.userService
        .grtAllUsers(
          this.pageObject.paging.pageNumber
          // 10,
          // this.searchKey
        )
        .subscribe((res: any) => {
          this.users = res.data;
          this.totalCount = res.data.length;
          this.users.forEach(
            (value: any) => (value.image = getFullImageUrl(value.image))
          );
        })
    );
  }
}
