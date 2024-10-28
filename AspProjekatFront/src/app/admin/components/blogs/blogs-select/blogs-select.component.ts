import { Component } from '@angular/core';
import { Blog } from '../../../../interfaces/blog.models';
import { Router } from '@angular/router';
import { BlogService } from '../../../../apiServices/blog.service';

@Component({
  selector: 'app-blogs-select',
  templateUrl: './blogs-select.component.html',
  styleUrl: './blogs-select.component.css'
})
export class BlogsSelectComponent {
  blogs: Blog[] = [];

  constructor(private router: Router,private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(response => {
      this.blogs = response.data;
    });
  }

  deleteBlog(id: number): void {
    this.blogService.deleteJob(id).subscribe(
      () => {
        console.log(`Blog with ID ${id} deleted successfully.`);
        this.blogs = this.blogs.filter(blog => blog.id !== id);
      },
      error => {
        console.error(`Error deleting blog with ID ${id}:`, error);
        // Handle error cases
      }
    );
   }
}
