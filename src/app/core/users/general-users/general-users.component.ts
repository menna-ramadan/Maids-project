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
  total: number = 0;
  pageSize = 6;
  currentPage: EventEmitter<number> = new EventEmitter();
  searchKey: string = '';
  pageObject: any = {
    paging: { pageNumber: 1, pageSize: 6 },
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
          const ii = res.data.filter((user: any) => user.id === this.searchKey);
          this.users = res.data;
          console.log(res.total, 'res.total');
          this.total = res.total;
          this.users.forEach(
            (value: any) => (value.image = getFullImageUrl(value.image))
          );
        })
    );
  }
}
