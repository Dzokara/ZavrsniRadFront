import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../interfaces/blog.models';
import { BlogService } from '../apiServices/blog.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  blog!: Blog;
  commentForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Initialize comment form
    this.commentForm = this.fb.group({
      text: ['', Validators.required]
    });

    // Load blog details
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (!isNaN(id)) {
        this.fetchBlog(id);
      } else {
        this.errorMessage = 'Invalid blog ID';
      }
    });
  }

  fetchBlog(id: number): void {
    this.blogService.getBlogById(id).subscribe({
      next: (data: Blog) => {
        this.blog = data;
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = 'An error occurred while fetching the blog post.';
        console.error('Blog fetch error:', error);
      }
    });
  }

  submitComment(): void {
    if (this.commentForm.valid && this.blog) {
        const commentData = {
            text: this.commentForm.value.text,
            blogId: this.blog.id
        };

        this.blogService.addComment(commentData).subscribe({
            next: () => {
                // Fetch the updated blog details, including comments
                this.fetchBlog(this.blog.id);
                this.commentForm.reset(); // Clear the form
            },
            error: (err) => {
                console.error('Error submitting comment:', err);
                this.errorMessage = 'Could not submit the comment. Please try again.';
            }
        });
    }
}
}
