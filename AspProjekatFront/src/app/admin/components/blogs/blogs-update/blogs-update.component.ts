import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../../apiServices/blog.service';
import { Blog } from '../../../../interfaces/blog.models';

@Component({
  selector: 'app-blogs-update',
  templateUrl: './blogs-update.component.html',
  styleUrl: './blogs-update.component.css'
})
export class BlogsUpdateComponent implements OnInit {
  blogForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {
    this.blogForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: [null]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.blogService.getBlogById(id).subscribe((data: Blog) => {
        this.blogForm.patchValue({
          id: data.id,
          title: data.title,
          description: data.description
        });
      });
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    if (this.blogForm.valid) {
      const formData = new FormData();
      formData.append('id', this.blogForm.get('id')?.value);
      formData.append('title', this.blogForm.get('title')?.value);
      formData.append('description', this.blogForm.get('description')?.value);

      if (this.selectedFile) {
        formData.append('image', this.selectedFile, this.selectedFile.name);
      }

      this.blogService.updateBlog(formData).subscribe(
        response => {
          console.log('Blog updated successfully:', response);
          this.router.navigate(['/admin/blogs']);
        },
        error => {
          console.error('Error updating blog:', error);
        }
      );
    }
  }
}
