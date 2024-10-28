import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private apiUrl = 'http://localhost:5048/api/Positions';

  constructor(private http: HttpClient) { }


  getPositions(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(this.apiUrl);
  }
}
