import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Esperienza } from '../../../core/models/user.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatChipsModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  //Esperienze
//Azineda, ruolo, da, a, descrizione

@Output() esperienza = new EventEmitter<Esperienza>();


formEsperienza = new FormGroup({
  ruolo: new FormControl('', [Validators.required]),
  descrizione: new FormControl('', [Validators.required]),
  dataInizio: new FormControl('', [Validators.required]),
  dataFine: new FormControl('', [Validators.required]),
  azienda: new FormControl('', [Validators.required]),
})




salvaInfo() {

  const esperienza : Esperienza = {

    ruolo : this.formEsperienza.value.ruolo || '',
    descrizione : this.formEsperienza.value.descrizione || '',
    dataInizio : this.formEsperienza.value.dataInizio || '',
    dataFine : this.formEsperienza.value.dataInizio || '',
    azienda : this.formEsperienza.value.azienda || ''
  }

  this.esperienza.emit(esperienza);


}



}
