import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pelicula} from '../../models/peliculas/pelicula';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() evtPeliculaSeleccionada: EventEmitter<number>;

  constructor() {
    this.evtPeliculaSeleccionada = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  emitirId() {
    this.evtPeliculaSeleccionada.emit(this.pelicula.id);
  }

}
