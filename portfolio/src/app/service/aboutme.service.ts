import {Injectable} from '@angular/core';
import {Aboutme} from '../model/aboutme';
import {Skill} from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  aboutMe: Aboutme = new Aboutme();

  constructor() {

    // Initialize Aboutme Profile

    // Initialize the skills array
    this.aboutMe.skills = [];
    this.aboutMe.skills.push({skillName: 'HTML / CSS', skillPercentage: 90, skillColor: 'bg-success'});
    this.aboutMe.skills.push({skillName: 'Java', skillPercentage: 80, skillColor: 'bg-success'});
    this.aboutMe.skills.push({skillName: 'Javascript', skillPercentage: 80, skillColor: 'bg-success'});
    this.aboutMe.skills.push({skillName: 'SQL', skillPercentage: 80, skillColor: 'bg-success'});
    this.aboutMe.skills.push({skillName: 'MYSQL', skillPercentage: 80, skillColor: 'bg-success'});
    this.aboutMe.skills.push({skillName: 'Angular', skillPercentage: 80, skillColor: 'bg-success'});
    this.aboutMe.skills.push({skillName: 'Spring Framework', skillPercentage: 70, skillColor: 'bg-success'});
    this.aboutMe.skills.push({skillName: 'Agile/Scrum', skillPercentage: 60, skillColor: 'bg-warning'});
    this.aboutMe.skills.push({skillName: 'Python', skillPercentage: 50, skillColor: 'bg-warning'});
    this.aboutMe.skills.push({skillName: 'PHP', skillPercentage: 40, skillColor: 'bg-warning'});
    this.aboutMe.skills.push({skillName: 'C++', skillPercentage: 25, skillColor: 'bg-danger'});
    this.aboutMe.skills.push({skillName: 'C#', skillPercentage: 20, skillColor: 'bg-danger'});
  }


}
