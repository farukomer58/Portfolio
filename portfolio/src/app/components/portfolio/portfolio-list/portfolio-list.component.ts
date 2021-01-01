import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  size = [1, 2, 3, 4, 5, 6, 7];

  constructor() {
  }

  ngOnInit(): void {
  }

}
