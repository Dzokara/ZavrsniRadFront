import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job.models';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:5048/api/Job';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<{ data: Job[] }> {
    return this.http.get<{ data: Job[] }>(this.apiUrl);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  deleteJob(id: number): Observable<Job> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete<Job>(`${this.apiUrl}/${id}`, { headers });
  }

  saveJob(id: number): Observable<any> {
    const token = localStorage.getItem('token'); // Adjust this to your token retrieval logic
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<any>(`${this.apiUrl}/${id}/like`, {}, { headers });
  }

  insertJob(jobData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, jobData, { headers });
  }


  updateJob(formData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.put<any>(`${this.apiUrl}/${formData.get('id')}`, formData, { headers });
  }
}
