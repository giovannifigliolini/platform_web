import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Competenze, Info } from '../../../core/models/user.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatChipsModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  @Output() compentenze = new EventEmitter<Competenze>();

  skills: string[] = []

  formCompetenze = new FormGroup({
    ruolo: new FormControl('', [Validators.required]),
    descrizione: new FormControl('', [Validators.required]),
    skills: new FormControl('', [Validators.required]),
  })

  addSkill(event: any) {
    this.skills.push(event.target.value);
    this.formCompetenze.controls['skills'].reset();
  }


  salvaInfo() {

    const competenze : Competenze = {
      ruolo: this.formCompetenze.value.ruolo || '',
      descrizione: this.formCompetenze.value.descrizione || '',
      skills: this.skills,

    }

    this.compentenze.emit(competenze);


  }

  remove(index: number) {

    this.skills.splice(index, 1)
  }

  edit(event: MatChipEditedEvent, index: number) {

    this.skills[index] = event.value;

  }
}
