import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/model';
import { AlunosService } from '../alunos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss']
})
export class ListaalunosComponent implements OnInit {

  alunos: Observable<Aluno[]>;

  displayedColumns = ['id','nomealuno'];

  constructor(private alunosService: AlunosService) {
    this.alunos = this.alunosService.list();
  }

  ngOnInit(): void {}

}
