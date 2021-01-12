import {Injectable} from '@angular/core';
import {Aboutme} from '../model/aboutme';
import {Skill} from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  aboutMe: Aboutme = new Aboutme();

  constructor() {
    this.aboutMe.skills = [];
    this.aboutMe.skills.push({skillName: 'HTML / CSS', skillPercentage: 90});
    this.aboutMe.skills.push({skillName: 'Java', skillPercentage: 80});
    this.aboutMe.skills.push({skillName: 'Javascript', skillPercentage: 80});
    this.aboutMe.skills.push({skillName: 'SQL', skillPercentage: 80});
    this.aboutMe.skills.push({skillName: 'MYSQL', skillPercentage: 80});
    this.aboutMe.skills.push({skillName: 'Angular', skillPercentage: 80});
    this.aboutMe.skills.push({skillName: 'Spring Framework', skillPercentage: 70});
    this.aboutMe.skills.push({skillName: 'Agile/Scrum', skillPercentage: 60});
    this.aboutMe.skills.push({skillName: 'Python', skillPercentage: 40});
    this.aboutMe.skills.push({skillName: 'PHP', skillPercentage: 40});
    this.aboutMe.skills.push({skillName: 'C++', skillPercentage: 25});
    this.aboutMe.skills.push({skillName: 'C#', skillPercentage: 20});
  }


}
