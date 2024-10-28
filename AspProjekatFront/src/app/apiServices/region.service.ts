import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl = 'http://localhost:5048/api/Region';

  constructor(private http: HttpClient) { }


  getRegions(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(this.apiUrl);
  }
}
