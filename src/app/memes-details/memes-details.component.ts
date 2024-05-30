import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemeService } from '../Services/meme/meme.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-memes-details',
    standalone: true,
    templateUrl: './memes-details.component.html',
    styleUrl: './memes-details.component.css',
    imports: [CommonModule]
})
export class MemesDetailsComponent {
  meme: any;

    private route = inject(ActivatedRoute)
    private memeService = inject(MemeService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.memeService.getMemeById(id).subscribe(data => {
        this.meme = data;
      });
    }
  }

  addFavorite(meme: any): void {
    this.memeService.addFavorite(meme);
  }
  private http = inject(HttpClient);

  downloadImage(url: string) {
    this.http.get(url, { responseType: 'blob' }).subscribe(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'meme.jpg'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, error => {
        console.error('Error downloading the image: ', error);
    });
  }
}
