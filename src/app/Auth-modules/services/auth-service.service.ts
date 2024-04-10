import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl: string = environment.baseUrl;
  headers = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.baseUrl}auth/login`, data);
  }
}
