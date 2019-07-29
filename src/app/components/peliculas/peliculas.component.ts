import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../models/peliculas/pelicula';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService,
              private router: Router,
              private activatedRoute: ActivatedRoute)
  {


  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( params => {
      if (params.get('termino') != null) {
        this.peliculas = this.peliculasService.buscarPeliculas(params.get('termino'));
      } else {
        this.peliculas = this.peliculasService.getPeliculas();
      }
    });

  }

  verPelicula(id: number) {
    this.router.navigate(['/peliculas', id]);
  }
}
