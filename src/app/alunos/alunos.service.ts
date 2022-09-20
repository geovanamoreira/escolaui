import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  list(): Aluno[]{
    return[
      {id: 1, nomealuno: 'Garbiela'},
      {id: 2, nomealuno: 'Garbiel'},
      {id: 3, nomealuno: 'Mateus'},
      {id: 4, nomealuno: 'Lisa'},
      {id: 5, nomealuno: 'Fernanda'},
      {id: 6, nomealuno: 'João'}
    ]
  }
}
