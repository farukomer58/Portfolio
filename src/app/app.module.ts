import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/mainpage/header/header.component';
import { FooterComponent } from './components/mainpage/footer/footer.component';
import { HomeComponent } from './components/mainpage/home/home.component';
import { HomeportfolioComponent } from './components/mainpage/home/homeportfolio/homeportfolio.component';
import { PortfolioListComponent } from './components/portfolio/portfolio-list/portfolio-list.component';
import { PortfolioItemComponent } from './components/portfolio/portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeportfolioComponent,
    PortfolioListComponent,
    PortfolioItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
