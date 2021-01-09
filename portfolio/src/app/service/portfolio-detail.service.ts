import {Injectable} from '@angular/core';
import {PortfolioDetail} from '../model/portfolio-detail';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDetailService {

  portfolioItems: PortfolioDetail[] = [];

  constructor() {

    for (let i = 1; i <= 10; i++) {
      const item = new PortfolioDetail();
      item.id = i;
      item.title = 'Vanstreek groente en fruit';
      item.shortDescription = 'This is a system that brings local suppliers together with customer';
      item.description = 'LOREM jo joj LOREM jo joj LOREM jo joj LOREM jo joj LOREM jo joj LOREM jo joj LOREM jo joj';
      item.client = 'Vanstreek';
      item.started = '15/09/2020';
      item.ended = '15/09/2020';
      item.status = 'Done';
      item.github = 'http://github.com';
      item.technologies = ['HTML', 'TYPESCRIPT', 'ANGULAR', 'REST', 'SPRING', 'MYSQL', 'JPA'];
      this.portfolioItems.push(item);
    }
  }

}
