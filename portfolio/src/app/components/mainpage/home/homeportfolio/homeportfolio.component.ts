import {Component, OnInit} from '@angular/core';
import {PortfolioDetailService} from '../../../../service/portfolio-detail.service';
import {PortfolioDetail} from '../../../../model/portfolio-detail';

@Component({
  selector: 'app-homeportfolio',
  templateUrl: './homeportfolio.component.html',
  styleUrls: ['./homeportfolio.component.css']
})
export class HomeportfolioComponent implements OnInit {

  recentPortfolioItems: PortfolioDetail[];

  constructor(private portfolioService: PortfolioDetailService) {
  }

  ngOnInit(): void {
    this.recentPortfolioItems = this.portfolioService.portfolioItems.slice(0, 3);
  }

}
