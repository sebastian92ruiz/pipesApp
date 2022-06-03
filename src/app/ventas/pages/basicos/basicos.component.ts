import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'sebastian';
  nombreUpper: string = 'SEBASTIAN';
  nombreCompleto: string = 'seBastIan rUiZ';

  fecha: Date = new Date(); // ek día de hoy

}
