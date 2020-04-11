import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'news', component: NewsComponent
    },
    {
        path: 'newscontent', component: NewscontentComponent
    },
    {
        path: '**', redirectTo: 'home'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
