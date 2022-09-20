import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})

export class ListacursosComponent implements OnInit {

  //LISTA-TABELA DE CURSOS
  cursos: Curso[] = [];

  displayedColumns = ['id','nomecurso'];

  constructor(private cursosService: CursosService) {}

  //TODA VEZ QUE INICIAR
  ngOnInit(): void {
    this.cursos = this.cursosService.list();
  }

}
