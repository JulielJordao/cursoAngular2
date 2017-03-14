import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operador-elvis-component',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc: 'Descrição da Tarefa',
    responsavel: null
  }

  constructor() { }

  ngOnInit() {
  }

}
