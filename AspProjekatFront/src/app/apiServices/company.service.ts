import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = 'http://localhost:5048/api/Company';

  constructor(private http: HttpClient) { }


  getCompanies(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(this.apiUrl);
  }
}
