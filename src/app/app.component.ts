import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MemesListComponent } from './memes-list/memes-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MemesListComponent,RouterLink,RouterLinkActive]
})
export class AppComponent {
  title = 'apiProject';
}
