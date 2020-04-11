import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { NewcontentComponent } from './components/newcontent/newcontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'news',component: NewsComponent},
  {path:'newscontent',component:NewcontentComponent},
  {path:'product',component:ProductComponent},
  {path:'productcontent/:pid',component:ProductcontentComponent},
  {path:'',redirectTo:'home',pathMatch:'prefix'},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
