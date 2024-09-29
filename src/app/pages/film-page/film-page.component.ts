import { Component, OnInit } from '@angular/core';
import { FILMS } from '../../constants/films.constants';
import { Film } from '../../models/film.models';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent implements OnInit {

  public films: Film[] = []
  public film!: Film


  constructor(private _route: ActivatedRoute, private _router: Router,
      private _filmsService: FilmService
  ) { }
 
  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id')
    this.films = this._filmsService.getFullFilms
    this._initFilm(Number(id))
  }

  private _initFilm(id: number) {
    const findFilm = this.films.find(film => film.id === id)
    console.log(this.films);
    console.log(id);
    console.log(this.films.find(film => film.id === id));

    if (findFilm) {
      this.film = findFilm
    } else {
      this._router.navigate(['/'])
    }
  }
}