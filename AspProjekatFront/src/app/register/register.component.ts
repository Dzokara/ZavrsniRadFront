import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSignup() {
    if (this.signupForm.invalid) {
      return;
    }

    this.http.post('http://localhost:5048/api/Users', this.signupForm.value).subscribe((response: any) => {
      this.router.navigate(['/login']);
    }, error => {
      console.error(error);
    });
  }

  get emailControl() {
    return this.signupForm.get('email')!;
  }

  get usernameControl() {
    return this.signupForm.get('username')!;
  }

  get firstNameControl() {
    return this.signupForm.get('firstName')!;
  }

  get lastNameControl() {
    return this.signupForm.get('lastName')!;
  }

  get passwordControl() {
    return this.signupForm.get('password')!;
  }
}
