import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../../../apiServices/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs-insert',
  templateUrl: './blogs-insert.component.html',
  styleUrl: './blogs-insert.component.css'
})
export class BlogsInsertComponent implements OnInit {
  blogForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private blogService: BlogService
  ) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.blogForm.patchValue({ image: file });
      this.blogForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.blogForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('title', this.blogForm.get('title')?.value);
      formData.append('description', this.blogForm.get('description')?.value);
      formData.append('image', this.selectedFile);

      this.blogService.insertBlog(formData).subscribe(
        response => {
          console.log('Blog post inserted successfully:', response);
          this.router.navigate(['/admin/blogs']);
        },
        error => {
          console.error('Error inserting blog post:', error);
        }
      );
    } else {
      // Form is invalid, handle accordingly
    }
  }
}
