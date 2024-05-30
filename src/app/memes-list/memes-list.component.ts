import { Component, OnInit, inject } from '@angular/core';
import { MemeService } from '../Services/meme/meme.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-memes-list',
    standalone: true,
    templateUrl: './memes-list.component.html',
    styleUrl: './memes-list.component.css',
    imports: [CommonModule, RouterModule]
})
export class MemesListComponent implements OnInit {
  memes: any[] = [];
  paginatedMemes: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;

  private memeService = inject(MemeService);
  ngOnInit(): void {
    this.memeService.getMemes().subscribe(data => {
      this.memes = data;
      this.paginate();
    });
  }

  paginate(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedMemes = this.memes.slice(start,end);
  }

  nextPage(): void {
    if ((this.currentPage * this.itemsPerPage) < this.memes.length) {
      this.currentPage++;
      this.paginate();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  goToPage(page: number): void {
    if (page > 0 && (page - 1) * this.itemsPerPage < this.memes.length) {
      this.currentPage = page;
      this.paginate();
    }
  }

  addFavorite(meme: any): void {
    this.memeService.addFavorite(meme);
  }
}
