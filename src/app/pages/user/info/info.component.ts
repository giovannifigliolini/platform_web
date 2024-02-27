import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Info } from '../../../core/models/user.model';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  @Output() info = new EventEmitter<Info>();

  formInfo = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cognome: new FormControl('', [Validators.required]),
    dataNascita: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    viaIndirizzo: new FormControl('', [Validators.required]),
    città: new FormControl('', [Validators.required]),
    provincia: new FormControl('', [Validators.required]),
    cap: new FormControl('', [Validators.required]),
  })


  salvaInfo() {

    const info: Info = {
      nome: this.formInfo.value.nome || '',
      cognome: this.formInfo.value.cognome || '',
      dataNascita: this.formInfo.value.dataNascita || '',
      viaIndirizzo: this.formInfo.value.viaIndirizzo || '',
      cap: this.formInfo.value.cap || '',
      città: this.formInfo.value.città || '',
      provincia: this.formInfo.value.provincia || '',
      email: this.formInfo.value.email || '',
      telefono: this.formInfo.value.telefono || ''
    }

    this.info.emit(info)
  }
}
