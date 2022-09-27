import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/model';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})

export class ListacursosComponent implements OnInit {

  //LISTA-TABELA DE CURSOS
  cursos: Observable<Curso[]>;

  displayedColumns = ['id','nomecurso'];

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.list();

  }

  //TODA VEZ QUE INICIAR
  ngOnInit(): void {}

}
