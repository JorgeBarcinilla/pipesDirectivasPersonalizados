import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { ResaltadoDinamicoDirective } from './directives/resaltado-dinamico.directive';
import { RepetirDirective } from './directives/repetir.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConversorPipe,
    ResaltadoDirective,
    ResaltadoDinamicoDirective,
    RepetirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
