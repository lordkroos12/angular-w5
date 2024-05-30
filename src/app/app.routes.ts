import { Routes } from '@angular/router';
import { MemesListComponent } from './memes-list/memes-list.component';
import { MemesDetailsComponent } from './memes-details/memes-details.component';
import { FavouriteMemesComponent } from './favourite-memes/favourite-memes.component';

export const routes: Routes = [
    {path:'', component: MemesListComponent},
    {path:'meme/:id', component: MemesDetailsComponent},
    {path:'favourites', component: FavouriteMemesComponent},
];
