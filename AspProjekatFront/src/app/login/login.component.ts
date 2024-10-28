import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../apiServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder,private userService:UserService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    this.http.post('http://localhost:5048/api/Auth', this.loginForm.value).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.fetchUserDetails(response.token);
      //this.router.navigate(['/home']);
    }, error => {
      if (error.status === 401) {
        this.loginForm.setErrors({ wrongCredentials: true });
      } else {
        console.error(error);
      }
    });
  }
  fetchUserDetails(token: string) {
    console.log("Entering fetchUserDetails");
    this.userService.getUsers(token).subscribe(
      (response: any) => {
        console.log('User details:', response.data);
  
     
        const userEmail = this.loginForm.get('email')?.value; 
  
      
        const user = response.data.find((user: any) => user.email === userEmail);
  
        if (user) {
          const isAdmin = user.useCaseIds.includes(4);
          localStorage.setItem('role', isAdmin ? 'admin' : 'user');
          this.router.navigate(['/home']);
        } else {
          console.error('User not found with email:', userEmail);
          
        }
      },
      error => {
        console.error('Error fetching user details:', error);
      }
    );
  }
  
}
