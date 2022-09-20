import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss']
})
export class ListaalunosComponent implements OnInit {

  alunos: Aluno[] = [];
  displayedColumns = ['id','nomealuno'];

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.list();
  }

}
