import {Component, OnInit} from '@angular/core';
import {AboutmeService} from '../../../service/aboutme.service';
import {Aboutme} from '../../../model/aboutme';
import {Skill} from '../../../model/skill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aboutMe: Aboutme;
  skills: Skill[];
  skillsRowOne: Skill[];
  skillsRowTwo: Skill[];
  skillsRowThree: Skill[];

  constructor(private aboutmeService: AboutmeService) {
  }

  ngOnInit(): void {
    this.aboutMe = this.aboutmeService.aboutMe;
    this.skills = this.aboutmeService.aboutMe.skills;

    const skillsSize = this.skills.length;

    if (skillsSize <= 5) {
      this.skillsRowOne = this.skills;
      this.skillsRowTwo = null;
      this.skillsRowThree = null;
    } else if (skillsSize <= 10) {
      this.skillsRowOne = this.skills.slice(0, 5);
      this.skillsRowTwo = this.skills.slice(5, skillsSize);
      this.skillsRowThree = null;
    }else if (skillsSize <= 15){
      this.skillsRowOne = this.skills.slice(0, 5);
      this.skillsRowTwo = this.skills.slice(5, 10);
      this.skillsRowThree = this.skills.slice(10, skillsSize);
    }else{
      // There is more then we want we just set the first 15
      this.skillsRowOne = this.skills.slice(0, 5);
      this.skillsRowTwo = this.skills.slice(5, 10);
      this.skillsRowThree = this.skills.slice(10, 15);
    }

  }

}
