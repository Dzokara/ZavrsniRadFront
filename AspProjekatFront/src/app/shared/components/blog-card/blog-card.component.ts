import { Component, Input } from '@angular/core';
import { Blog } from '../../../interfaces/blog.models';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() blog!: Blog;

  humanizeDate(date: Date | string): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return interval + ' years ago';

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval + ' months ago';

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + ' days ago';

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + ' hours ago';

    interval = Math.floor(seconds / 60);
    if (interval >= 1) return interval + ' minutes ago';

    return Math.floor(seconds) + ' seconds ago';
  }
}
