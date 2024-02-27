import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Formazione } from '../../../core/models/user.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatChipsModule, MatIconModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  @Output() formazione = new EventEmitter<Formazione>();

  lingue: string[] = []

  formFormazione = new FormGroup({
    diploma: new FormControl('', [Validators.required]),
    laurea: new FormControl('', [Validators.required]),
    lingue: new FormControl('', [Validators.required]),
  })

  addSkill(event: any) {
    this.lingue.push(event.target.value);
    this.formFormazione.controls['lingue'].reset();
  }


  salvaInfo() {

    const formazione : Formazione = {

      laurea : this.formFormazione.value.laurea || '',
      diploma : this.formFormazione.value.diploma || '',
      lingue : this.lingue

    }

    this.formazione.emit(formazione);


  }

  remove(index: number) {

    this.lingue.splice(index, 1)
  }

  edit(event: MatChipEditedEvent, index: number) {

    this.lingue[index] = event.value;

  }

}
