import {Injectable} from '@angular/core';
import {PortfolioDetail} from '../model/portfolio-detail';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDetailService {

  portfolioItems: PortfolioDetail[] = [];
  initialId = 0;

  constructor() {
    this.createPortfolioItem(
      ['https://i.imgur.com/U3OgFnt.png', 'https://i.imgur.com/0x9A6n0.png', 'https://i.imgur.com/Ka2plSH.png'],
      'Vanstreek groente en fruit',
      'This is a system that brings local suppliers together with customer',
      'This was a school project with the client Vanstreek, <br> ' +
      'We needed to create a web application that offers local fruit and vegetable producers the opportunity to promote and sell their products. <br><br>' +
      'The Technologies used is listed on the right, but we used mostly Angular with Typescript for the frontend application and Spring Boot for the backend.',
      'Vanstreek',
      '15/09/2020',
      '19/01/2021',
      'Done',
      'https://gitlab.fdmci.hva.nl/se-ewa-2020-2021/vanstreek-2',
      ['HTML', 'TYPESCRIPT', 'ANGULAR', 'REST', 'SPRING', 'MYSQL', 'JPA'],
      'https://vanstreek2-fe-app-staging.herokuapp.com/'
    );

    this.createPortfolioItem(
      ['https://i.imgur.com/GWkIR6X.png', 'https://i.imgur.com/LNjB4r4.png', 'https://i.imgur.com/GWkIR6X.png'],
      'Corendon Project Fasten Your Seatbelt',
      'System built to find and match travel partners.',
      'Project Fasten Your Seatbelt was a project created by Corendon and we as students had to realize the project, <br> ' +
      'Basically Corendon noticed many lonely travelers and wanted to have a platform were travelers could leave their interest ' +
      'and find a match with another traveler and if desired travel together <br><br>' +
      'We used technologies like HTML,CSS and Javascript with the help of a API provided by the University',
      'Corendon',
      '07/09/2019',
      '16/01/2020',
      'Done',
      'https://gitlab.fdmci.hva.nl/FYS/1920/is107/team-1',
      ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'FYSCLOUD-API', 'MYSQL', 'SQL'],
      null
    );

    // CREATE PAD PORTFOLIO ITEM
    this.createPortfolioItem(
      ['https://i.imgur.com/EfIRPKo.png', 'https://i.imgur.com/V0ze987.png', 'https://i.imgur.com/NnAlx2i.png'],
      'Ben Sajet Project Agile Development',
      'A system where the young and old community can organize activities together.',
      'The focus of Project Agile Development was on learning us to lead a project in a Agile method SCRUM. <br><br> ' +
      'We received different lessons about the project development method SCRUM and learned a lot about it in this project ' +
      'This project was started on order of Ben Sajet. That is a company that cares for elder people.<br>' +
      'The point was so create a system what elder people could use to be in contact with the new generation and hold events together' +
      '<br>' +
      'As said the focus was on Agile:SCRUM, other technologies where Javascript, SQL, MySQL',
      'Corendon',
      '04/02/2020',
      '16/07/2020',
      'Done',
      'https://gitlab.fdmci.hva.nl/pad/19-20/bsc/team-12',
      ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'SCRUM', 'MYSQL', 'SQL'],
      null
    );


  }

  createPortfolioItem(imageUrls, title, shortDesc, desc, client, started, ended, status, github, technologies, demo): any {
    const item = new PortfolioDetail();
    item.id = this.initialId++;
    item.image = imageUrls; // Initialize Image Array
    item.title = title;
    item.shortDescription = shortDesc;
    item.description = desc;
    item.client = client;
    item.started = started;
    item.ended = ended;
    item.status = status;
    item.github = github;
    item.technologies = technologies;
    item.demo = demo;
    this.portfolioItems.push(item);
  }

}
