import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditcardsRoutingModule } from './creditcards-routing.module';
import { CreditcardsComponent } from './creditcards.component';


@NgModule({
  declarations: [
    CreditcardsComponent
  ],
  imports: [
    CommonModule,
    CreditcardsRoutingModule
  ]
})
export class CreditcardsModule { }
