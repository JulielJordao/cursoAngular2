import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivas-component',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  testes : Array<String> = ["teste", "teste1", "teste2"];
  teste3 : String = "asdasd"
  font = 15;
  ativo : boolean = true;
  constructor() { 

  }

  ngOnInit() {
    
  }

  cadastro(){
    
  }

}
