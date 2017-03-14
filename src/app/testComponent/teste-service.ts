import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
    
    getCursos() {
        return ['Angular 2', 'Tempo']
    }

    getValorCurso() {
        // switch () {
        //     case 'Angular 2':
        //         return 500;
        //     case 'Tempo':
                return 1500;
        //     default :
        //         return "NotValid";
        // }
    }

}