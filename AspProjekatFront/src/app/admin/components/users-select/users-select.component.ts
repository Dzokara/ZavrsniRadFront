import { Component } from '@angular/core';
import { User } from '../../../interfaces/blog.models';
import { Router } from '@angular/router';
import { UserService } from '../../../apiServices/user.service';

@Component({
  selector: 'app-users-select',
  templateUrl: './users-select.component.html',
  styleUrl: './users-select.component.css'
})
export class UsersSelectComponent {
  users: User[] = [];

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    if (token) {
      this.userService.getUsers(token).subscribe(response => {
        this.users = response.data;
        console.log(this.users);
      });
    } else {
      console.error("Token not found in localStorage");
      
    }
  }
    
}

