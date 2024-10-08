import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { BeverageComponent } from './beverage/beverage.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route HomeComponent
  { path: 'about-us', component: AboutUsComponent}, //About-Us route
  { path: 'app-beverage', component: BeverageComponent}, //BeverageComponent route
  { path: 'menu/:category', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
