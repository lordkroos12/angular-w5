import { Component, inject } from '@angular/core';
import { MemeService } from '../Services/meme/meme.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-favourite-memes',
    standalone: true,
    templateUrl: './favourite-memes.component.html',
    styleUrl: './favourite-memes.component.css',
    imports: [CommonModule, RouterModule]
})
export class FavouriteMemesComponent {
  favorites: any[] = [];

  private memeService = inject(MemeService);

  ngOnInit(): void {
    this.memeService.getFavorites().subscribe(data => {
      this.favorites = data;
    });
  }

  removeFavorite(meme: any): void {
    this.memeService.removeFavorite(meme);
    this.favorites = this.favorites.filter(fav => fav.id !== meme.id);
  }
}
