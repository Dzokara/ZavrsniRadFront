import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces/blog.models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'http://localhost:5048/api/Blog';

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<{ data: Blog[] }> {
    return this.http.get<{ data: Blog[] }>(this.apiUrl);
  }

  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }

  deleteJob(id: number): Observable<Blog> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete<Blog>(`${this.apiUrl}/${id}`, { headers });
  }

  insertBlog(blogData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.apiUrl, blogData, { headers });
  }
  updateBlog(formData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.put<any>(`${this.apiUrl}/${formData.get('id')}`, formData, { headers });
  }
  addComment(commentData: { text: string; blogId: number }): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.post(`http://localhost:5048/api/Comments`, commentData, {headers});
  }
}
