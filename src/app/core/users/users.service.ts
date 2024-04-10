import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserProfile } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  grtAllUsers(page: number) {
    return this.http.get<User>(`https://reqres.in/api/users?page=${page}`);
  }

  getUserProfile(id: any) {
    return this.http.get<UserProfile>(` https://reqres.in/api/users/?id=${id}`);
  }
}
