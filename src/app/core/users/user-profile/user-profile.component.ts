import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';
import { User, UserProfile } from '../../models/user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  Subscription: Subscription = new Subscription();
  showSpinner: boolean = true;
  userData!: User;
  userSupport!: UserProfile;
  userName = this.routeActivate.snapshot.paramMap.get('name');
  baseUrl: string = environment.baseUrl;

  constructor(
    private routeActivate: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.routeActivate.params.subscribe(({ id }) => {
      this.getUserData(id);
    });
  }
  getProgressBarStyles(width: number): object {
    return {
      width: `${width}%`,
    };
  }

  getUserData(id: any) {
    this.Subscription.add(
      this.userService.getUserProfile(id).subscribe((res: any) => {
        this.showSpinner = false;
        this.userData = res.data;
        this.userSupport = res.support;
      })
    );
  }
}
