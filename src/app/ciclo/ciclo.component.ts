import { Component, 
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy,
    Input
} from '@angular/core';

@Component({
    selector: 'ciclo-component',
    template: `<p>Teste ciclo de vida</p>`,
})
export class CicloComponent implements OnInit, OnChanges, 
    DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, Input {
    
    constructor(){

    };

    ngOnInit() {
        console.log("Init")
    };
    
    ngOnChanges() {
        console.log("OnChanges")
    };

    ngDoCheck() {
        console.log("DoCheck")
    };

    ngAfterContentInit(){
        console.log("AfterContentInit")
    };

    ngAfterContentChecked(){
        console.log("AfterContentChecked")
    };

    ngOnDestroy(){
        console.log("OnDestroy")
    };

    Input(){
        console.log("Input")
    };
}