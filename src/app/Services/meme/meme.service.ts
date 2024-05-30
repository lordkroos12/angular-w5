import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  private apiUrl = 'https://api.imgflip.com/get_memes';

  private favorites: any[] = [];

private http = inject(HttpClient)

  getMemes(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data.memes)
    );
  }

  getMemeById(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data.memes.find((meme: any) => meme.id === id))
    );
  }

  addFavorite(meme: any): void {
    if (!this.favorites.find(fav => fav.id === meme.id)) {
      this.favorites.push(meme);
    }
  }

  removeFavorite(meme: any): void {
    this.favorites = this.favorites.filter(fav => fav.id !== meme.id);
  }

  getFavorites(): Observable<any[]> {
    return new Observable(observer => {
      observer.next(this.favorites);
      observer.complete();
    });
  }
}
