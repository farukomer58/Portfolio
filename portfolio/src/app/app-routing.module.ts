import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/mainpage/home/home.component';
import {PortfolioListComponent} from './components/portfolio/portfolio-list/portfolio-list.component';
import {PortfolioDetailComponent} from './components/portfolio/portfolio-detail/portfolio-detail.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'portfolio', component: PortfolioListComponent},
  {path: 'portfolio-detail', component: PortfolioDetailComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

