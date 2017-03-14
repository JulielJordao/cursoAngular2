import { Component } from '@angular/core';

import { CursosService } from './teste-service';

@Component({
    selector: 'test-component',
    templateUrl: `./test-component.html`,
    providers: [CursosService] 
})

export class TestComponent{ 
 teste = 'exemplo';
 casoUso = "casoUso"
 cursos = ["Bootstrap", "Web", "Angular"]

 constructor(cursosService : CursosService){
    this.cursos = cursosService.getCursos();
 };

 onClick(){
    alert("Clicado");
 }

 exemploInput2 = "exemplo";

 limpar() {
     this.exemploInput2 = "";
 }



}

