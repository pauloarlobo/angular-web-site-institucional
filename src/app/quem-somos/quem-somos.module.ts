import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemSomosComponent } from './quem-somos.component';
import { QuemSomosRoutingModule } from './quem-somos-routing.module';

@NgModule({
  declarations: [
    QuemSomosComponent
  ],
  imports: [
    CommonModule,
    QuemSomosRoutingModule
  ]
})
export class QuemSomosModule { }
