import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
import { TestComponent } from './testComponent/test-component';
import { AplicacaoComponent } from './aplicacao/aplicacao.component'
import { CicloComponent } from './ciclo/ciclo.component';
import { LifeCiclyComponent } from './life-cicly/life-cicly.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { HighligthMouseDirective } from './shared/highligth-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AplicacaoComponent,
    CicloComponent,
    LifeCiclyComponent,
    DiretivasComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    HighligthMouseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, TestComponent, CicloComponent, DiretivasComponent, OperadorElvisComponent]
})
export class AppModule { }


