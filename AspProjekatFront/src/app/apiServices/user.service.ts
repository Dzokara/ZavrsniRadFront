import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5048/api/Users';

  constructor(private http: HttpClient) { }

  getUsers(token: string): Observable<{ data: any }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    return this.http.get<{ data: any }>(`${this.apiUrl}`, { headers });
  }
}
