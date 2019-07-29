// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/peliculas/pelicula.component';

// Servicios
import { PeliculasService } from './services/peliculas.service';

// Pipes
import { SmartTruncatePipe } from './pipes/smart-truncate.pipe';
import { CardComponent } from './components/peliculas/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PeliculasComponent,
    PeliculaComponent,
    SmartTruncatePipe,
    CardComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
