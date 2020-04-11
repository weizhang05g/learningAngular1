import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { PcateComponent } from './components/product/pcate/pcate.component';
import { PlistComponent } from './components/product/plist/plist.component';
import { NewsComponent } from './components/news/news.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'setting', component: SettingComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'prefix' }
    ]
  },
  {
    path: 'product', component: ProductComponent, children: [
      { path: 'pcate', component: PcateComponent },
      { path: 'plist', component: PlistComponent },
      { path: '', redirectTo: 'plist', pathMatch: 'prefix' }
    ]
  },
  {path:'news',component:NewsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
