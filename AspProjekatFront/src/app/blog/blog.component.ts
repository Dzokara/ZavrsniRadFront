import { Component } from '@angular/core';
import { Blog } from '../interfaces/blog.models';
import { BlogService } from '../apiServices/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(response => {
      console.log(response.data)
      this.blogs = response.data;
    });
  }
}
