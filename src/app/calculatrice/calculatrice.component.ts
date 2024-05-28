import { Component } from '@angular/core';


@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {
  getRandom(): number {
    return Math.random() * 100
  }
  addition(valeur1: number, valeur2: number): number {
    return valeur1 + valeur2    
  }
  soustraction(valeur1: number, valeur2: number): number {
    return valeur1 - valeur2
  }
  multiplication(valeur1: number, valeur2: number): number {
    return valeur1 * valeur2
  }
  division(valeur1: number, valeur2: number): number {
    return valeur1 / valeur2
  }

}

