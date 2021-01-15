import {Injectable} from '@angular/core';
import {PortfolioDetail} from '../model/portfolio-detail';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDetailService {

  portfolioItems: PortfolioDetail[] = [];

  constructor() {
    const item = new PortfolioDetail();
    item.image = []; // Initialize Image Array
    item.id = 0;
    item.image[0] = 'https://i.imgur.com/U3OgFnt.png';
    item.image[1] = 'https://i.imgur.com/0x9A6n0.png';
    item.image[2] = 'https://i.imgur.com/Ka2plSH.png';
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

    for (let i = 1; i <= 10; i++) {
      const randomItem = new PortfolioDetail();
      randomItem.image = []; // Initialize Image Array
      randomItem.id = i;
      randomItem.image[0] = 'https://i.imgur.com/0TTaPUL.jpg';
      randomItem.title = 'Vanstreek groente en fruit';
      randomItem.shortDescription = 'This is a system that brings local suppliers together with customer';
      randomItem.description = 'LOREM jo joj LOREM jo joj LOREM jo joj LOREM jo joj LOREM jo joj LOREM jo joj LOREM jo joj';
      randomItem.client = 'Vanstreek';
      randomItem.started = '15/09/2020';
      randomItem.ended = '15/09/2020';
      randomItem.status = 'Done';
      randomItem.github = 'http://github.com';
      randomItem.technologies = ['HTML', 'TYPESCRIPT', 'ANGULAR', 'REST', 'SPRING', 'MYSQL', 'JPA'];
      this.portfolioItems.push(randomItem);
    }
  }

}
