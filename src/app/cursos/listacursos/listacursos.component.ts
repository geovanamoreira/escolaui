import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})

export class ListacursosComponent implements OnInit {

  //LISTA-TABELA DE CURSOS
  cursos: Curso[] = [
    {id: 1, nomecurso: 'Desenvolvimento de Sistemas'},
    {id: 2, nomecurso: 'Química'},
    {id: 3, nomecurso: 'Administração'},
    {id: 4, nomecurso: 'Marketing'},
    {id: 5, nomecurso: 'Contabilidade'},
    {id: 6, nomecurso: 'Logística'}
  ];

  displayedColumns = ['nomecurso'];

  constructor() {}

  ngOnInit(): void {
  }

}
