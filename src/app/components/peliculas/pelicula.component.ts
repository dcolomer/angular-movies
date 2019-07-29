import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';
import {Pelicula} from '../../models/peliculas/pelicula';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: Pelicula = {
    id: 0,
    titulo: '',
    sinopsis: '',
    img: '',
    anio: 0,
    direccion: ''
  };

  constructor(private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService,
              private location: Location) {
    this.activatedRoute.params.subscribe(params => {
      this.pelicula = this.peliculasService.getPelicula(params['id']);
    });
  }

  ngOnInit() {
  }

  volver() {
    this.location.back();
  }

}
