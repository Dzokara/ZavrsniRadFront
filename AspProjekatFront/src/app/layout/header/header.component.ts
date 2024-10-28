import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    const role = localStorage.getItem('role');
    return role === 'admin';
  }

  Logout() {
    // Endpoint for logout API
    const apiUrl = 'http://localhost:5048/api/Auth';

    // Prepare headers with token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    // Send DELETE request with headers
    this.http.delete(apiUrl, { headers }).subscribe(
      () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error logging out:', error);
        
      }
    );
  }

}
