import {Component, OnInit} from '@angular/core';
import {PortfolioDetailService} from '../../../service/portfolio-detail.service';
import {PortfolioDetail} from '../../../model/portfolio-detail';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  allPortfolioItems: PortfolioDetail[] = [];

  constructor(private portfolioService: PortfolioDetailService) {
  }

  ngOnInit(): void {
    console.log(this.portfolioService.portfolioItems);
    this.allPortfolioItems = this.portfolioService.portfolioItems;
  }

}
