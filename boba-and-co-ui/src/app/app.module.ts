import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { MenuCatagoriesComponent } from './components/menu-catagories/menu-catagories.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { IceComponentComponent } from './components/menu/menu_components/ice-component/ice-component.component';
import { SizeComponentComponent } from './components/menu/menu_components/size-component/size-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { BeverageComponent } from './beverage/beverage.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    JumbotronComponent,
    MenuCatagoriesComponent,
    FooterComponent,
    FeaturesComponent,
    IceComponentComponent,
    SizeComponentComponent,
    AboutUsComponent,
    HomeComponent,
    BeverageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
