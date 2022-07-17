import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor','Capitan america'];
  heroeBorrado: string  = '';

  borrarHeroe(): void {
    console.log('borranding ....');
    this.heroeBorrado = this.heroes.shift() || '';
     
  }
}
