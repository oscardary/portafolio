 import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, HomeComponent, ItemComponent, SearchComponent } from './components/index.paginas';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:keyWork', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
