import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input() users: User[] = [];
  @Input() totalCount = 0;
  @Input() userFilter: any = {
    paging: { pageNumber: 1, pageSize: 10 },
  };

  baseUrl: string = environment.baseUrl;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  viewUserProfile(user: any) {
    this.router.navigate([
      `dashboard/user-profile/${user.id}`,
      {
        name: user.first_name,
      },
    ]);
  }
}
