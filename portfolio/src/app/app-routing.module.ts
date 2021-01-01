import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/mainpage/home/home.component';
import {PortfolioListComponent} from './components/portfolio/portfolio-list/portfolio-list.component';
import {PortfolioDetailComponent} from './components/portfolio/portfolio-detail/portfolio-detail.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutmeComponent} from './components/aboutme/aboutme.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'portfolio', component: PortfolioListComponent},
  {path: 'portfolio-detail', component: PortfolioDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

