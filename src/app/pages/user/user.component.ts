import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTabsModule, EducationComponent, SkillsComponent, ExperienceComponent, InfoComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  formInfo !: FormGroup;
  formSkills !: FormGroup;
  formEducation !: FormGroup;
  formExprecience !: FormGroup;

  selectedTab !: number;

  constructor(){

  }

//Primo form
//Nome, cognome, via, città, provincia, stato, numero di telefono, data di nascita, email

//Secondo form competenze
//Ruolo, skills, descrizione

//Formazione
//diploma, Laurea, Lingua

//Esperienze
//Azineda, ruolo, da, a, descrizione

salvaCurriculum(event : any, tab : number){

  console.log(event)
}

}
